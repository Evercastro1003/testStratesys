import { useMutation, useQueryClient } from "react-query";

const useDeleteTaskMutation = () => {
    const queryClient = useQueryClient();

    const deleteTask = async (taskId) => {
        const response = await fetch(`http://localhost:3000/todo/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const newData = response.json();
        queryClient.invalidateQueries('tasks');

        return newData

    };

    return useMutation(deleteTask);
}

export default useDeleteTaskMutation 