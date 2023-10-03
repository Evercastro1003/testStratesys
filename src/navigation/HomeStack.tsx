import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from '../screens/ToDoListScreen';
import CreateTeask from '../screens/CreateTeaskScreen';
import { TaskModel } from '../domain/types/TaksModel';
import TeaskDetail from '../screens/TaskDetailScreen';
import { Button } from 'react-native';

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
                <Stack.Screen name="ToDo" component={ToDoList} options={
                    { title: "To Do", headerTintColor: '#fff' }
                } />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal', headerStyle: { backgroundColor: '#272534' } }}>
                <Stack.Screen name="CreateTask" component={CreateTeask} options={
                    ({ route, navigation }) => (
                        {
                            title: "Create Task",
                            headerTintColor: '#fff',
                            headerLeft: () => (
                                <Button
                                    title="Go Back"
                                    onPress={() => {
                                        navigation.goBack(); // Navegar hacia atrás
                                    }}
                                />
                            ),
                        })
                } />
                <Stack.Screen name="TaskDetail" component={TeaskDetail} options={
                    ({ route, navigation }) => (
                        {
                            title: `Task Detail - ${route.params.task.title}`,
                            headerTintColor: '#fff',
                            headerLeft: () => (
                                <Button
                                    title="Go Back"
                                    onPress={() => {
                                        navigation.goBack(); // Navegar hacia atrás
                                    }}
                                />
                            ),
                        })
                } />
            </Stack.Group>
        </Stack.Navigator>
    )
}


export default HomeStack;

