import { RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/RootStackParamList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type NavigationTaskProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'TaskDetail'>;
    route: RouteProp<RootStackParamList, 'TaskDetail'>;
};