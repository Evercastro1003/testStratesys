import { useMutation, useQueryClient } from "react-query";
import { endpoint, queryKeys } from "../../services/endpoint";

const useCreateTaskMutation = () => {
    const queryClient = useQueryClient();

    const createTask = async (newTask) => {
        const response = await fetch(endpoint.todos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        const newData = response.json();
        queryClient.invalidateQueries(queryKeys.tasks);

        return newData

    };

    return useMutation(createTask);
}

export default useCreateTaskMutation 