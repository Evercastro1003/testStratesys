import { useMutation } from "react-query";
import { TaskModel } from '../../domain/types/TaksModel';

const useUpdateTaskMutation = () => {

  const updateTask = async (task: TaskModel) => {

    const response = await fetch(`http://localhost:3000/todo/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const updatedData =  await response.json();

    return updatedData;
  };

  return useMutation(updateTask);
};

export default useUpdateTaskMutation;
