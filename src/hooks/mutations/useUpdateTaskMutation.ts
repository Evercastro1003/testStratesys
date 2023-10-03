import { useMutation } from "react-query";
import { TaskModel } from '../../domain/types/TaksModel';
import { endpoint, queryKeys } from "../../services/endpoint";

const useUpdateTaskMutation = () => {

  const updateTask = async (task: TaskModel) => {

    const response = await fetch(`${endpoint.todos}/${task.id}`, {
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
