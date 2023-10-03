import { useQuery, useMutation } from 'react-query';

const useTasksQuery = () => {
    const fetchTasks = async () => {
        const response = await fetch('http://localhost:3000/todo');
        
        return response.json();
      };

    return useQuery('tasks', fetchTasks)
}

export default useTasksQuery