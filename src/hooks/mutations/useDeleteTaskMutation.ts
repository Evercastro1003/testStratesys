import { useMutation, useQueryClient } from "react-query";
import { endpoint, queryKeys } from "../../services/endpoint";

const useDeleteTaskMutation = () => {
    const queryClient = useQueryClient();

    const deleteTask = async (taskId) => {
        const response = await fetch(`${endpoint.todos}/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const newData = response.json();
        queryClient.invalidateQueries(queryKeys.tasks);

        return newData

    };

    return useMutation(deleteTask);
}

export default useDeleteTaskMutation 