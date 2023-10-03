import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TaskModel } from './TaksModel';

// Define las rutas de tu aplicación
type RootStackParamList = {
  ToDo: undefined; // No se requieren parámetros para la pantalla Home
  TaskDetail: { task: TaskModel }; // La pantalla CreateTask espera un parámetro llamado "task" de tipo TaskModel
  CreateTask: undefined
};

// Define tipos para la navegación y las rutas
type RouteProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type { RootStackParamList, RouteProps };
