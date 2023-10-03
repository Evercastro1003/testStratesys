import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from '../screens/ToDoListScreen';
import CreateTeask from '../screens/CreateTeaskScreen';
import { TaskModel } from '../domain/types/TaksModel';
import TeaskDetail from '../screens/TaskDetailScreen';

type RootStackParam = {
    ToDo: any
    TaskDetail: { task: TaskModel }
    CreateTask: any
}

const Stack = createNativeStackNavigator<RootStackParam>();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#272534' } }}>
                <Stack.Screen name="ToDo" component={ToDoList} options={{ title: "To Do" }} />
                <Stack.Screen name="TaskDetail" component={TeaskDetail} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="CreateTask" component={CreateTeask} />
            </Stack.Group>
        </Stack.Navigator>
    )
}


export default HomeStack;

