import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import { TaskProvider } from './src/context/TaskContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <WrapperApp />
    </QueryClientProvider>
  );
}

const WrapperApp = () => {
  
  return (
    <NavigationContainer>
      <TaskProvider>
        <HomeStack />
        <StatusBar style="light" />
      </TaskProvider>
    </NavigationContainer>
  )
}

export default App;
