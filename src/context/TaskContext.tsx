import React, { createContext, useContext} from 'react';
import { TaskModel } from '../domain/types/TaksModel';
import useTasksQuery from '../hooks/query/useTasksQuery';
import useCreateTaskMutation from '../hooks/mutations/useCrateTaskMutation';
import useUpdateTaskMutation from '../hooks/mutations/useUpdateTaskMutation';
import { useQueryClient } from 'react-query';
import useDeleteTaskMutation from '../hooks/mutations/useDeleteTaskMutation';

// Define un tipo para el contexto
interface TaskContextType {
  tasks: {
    data: TaskModel[],
    isLoading: boolean
  };
  addTask: (task: TaskModel) => void;
  deleteTask: (taskId: number) => void;
  searchData: (title: string) => void;
  completeTask: (task: TaskModel) => void;
  updateTask: (task: TaskModel)  => void;
}

// Crea el contexto y proporciona un tipo inicial
const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();

  const tasks = useTasksQuery()

  const createTaskMutation = useCreateTaskMutation();
  const updatedTaskMutation = useUpdateTaskMutation()
  const daleteTaskMutation = useDeleteTaskMutation()

  const addTask = async (newTask: TaskModel) => {
    
    const createdTask = await createTaskMutation.mutateAsync(newTask)
    
    console.log(createdTask)
  };

  const deleteTask = async(taskId: number) => {
    await daleteTaskMutation.mutateAsync(taskId)
  };

  const completeTask = async (task: TaskModel) => {
  
    try {
      const updatedTask = { ...task, completed: !task.completed, updatedDate: new Date() }
      const updated = await updatedTaskMutation.mutateAsync(updatedTask);
      queryClient.invalidateQueries('tasks')
    }
    catch(error){
      console.log(error)
    }
  }

  const updateTask = async (task: TaskModel) => {
    try {
      const updatedTask = {...task, updatedDate: new Date()}
      const updated = await updatedTaskMutation.mutateAsync(updatedTask);
      queryClient.invalidateQueries('tasks')
      console.log(updated)
    }
    catch(error){
      console.log(error)
    }
  }

  const searchData = (query: string) => {
    // Filtrar tareas que coincidan con la consulta
    return tasks.data.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const contextValue: TaskContextType = {
    tasks,
    addTask,
    deleteTask,
    searchData,
    completeTask,
    updateTask
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};
