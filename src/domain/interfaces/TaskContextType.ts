import { TaskModel } from "../types/TaksModel";

export interface TaskContextType {
    tasks: {
        data: TaskModel[],
        isLoading: boolean
    };
    addTask: (task: TaskModel) => void;
    deleteTask: (taskId: number) => void;
    searchData: (title: string) => void;
    completeTask: (task: TaskModel) => void;
    updateTask: (task: TaskModel) => void;
}