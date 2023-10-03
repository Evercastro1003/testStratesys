import { useQuery } from 'react-query';
import { endpoint, queryKeys } from "../../services/endpoint";

const useTasksQuery = () => {
    const fetchTasks = async () => {
        const response = await fetch(endpoint.todos);
        
        return response.json();
      };

    return useQuery(queryKeys.tasks, fetchTasks)
}

export default useTasksQuery