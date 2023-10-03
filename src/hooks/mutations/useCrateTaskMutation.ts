import { useMutation, useQueryClient } from "react-query";

const useCreateTaskMutation = () => {
    const queryClient = useQueryClient();

    const createTask = async (newTask) => {
        const response = await fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        const newData = response.json();
        queryClient.invalidateQueries('tasks');

        return newData

    };

    return useMutation(createTask);
}

export default useCreateTaskMutation 