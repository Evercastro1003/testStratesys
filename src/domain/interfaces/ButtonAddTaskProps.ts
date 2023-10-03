import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

export type ButtonAddTaskProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
};