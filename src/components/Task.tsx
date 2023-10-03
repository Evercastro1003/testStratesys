import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TaskModel } from '../domain/types/TaksModel'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../domain/types/RootStackParamList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Feather } from '@expo/vector-icons';
import { colors } from "../utils/constants"

interface TaskProps {
  task: TaskModel
}

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskDetail'>;
  route: RouteProp<RootStackParamList, 'TaskDetail'>;
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const navigation = useNavigation<Props['navigation']>()

  return (
    <View style={styles.container}>
      <Text>{task.completed ? <Feather name="check-square" size={24} color="#4CAF50" /> : <Feather name="check-square" size={24} color={colors.textPrimary} />}</Text>
      <Text style={[styles.text, { textDecorationLine: task.completed ? 'line-through' : 'none', color: colors.textPrimary }]}>{task.title}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    height: 35,
    width: "90%"
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    textDecorationColor: '#39414D'
  }
})