import { StyleSheet, Text, TextInput, View, Switch, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'
import { NavigationTaskProps } from '../domain/interfaces/NavigationTaskProps'

const TaskDetail: React.FC<NavigationTaskProps> = ({ route, navigation }) => {
  const { task } = route.params

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [completed, setCompleted] = useState(task.completed)

  const { updateTask } = useTaskContext()

  const handleUpdateTask = () => {
    const updatedTask = { ...task, title, description, completed }
    updateTask(updatedTask)
    Alert.alert("Congratulation!", "Your task was updated with successfully!")
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        placeholder="Título"
        onChangeText={setTitle}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textArea]}
        placeholderTextColor="#999"
        multiline
      />
      <View style={styles.switchContainer}>
        <Text style={completed ? styles.completedText : styles.notCompletedText}>
          {completed ? 'Completada' : 'No completada'}
        </Text>
        <Switch
          onValueChange={() => setCompleted(!completed)}
          value={completed}
          trackColor={{ false: '#f4f3f4', true: '#7e64ff' }} // Cambia el color de la pista del interruptor
          thumbColor={completed ? '#f4f3f4' : '#f4f3f4'} // Cambia el color del pulgar del interruptor
        />
      </View>
      <TouchableOpacity
        onPress={handleUpdateTask}
        style={styles.button}
      >
        <Text style={styles.text}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#272534',
  },
  input: {
    backgroundColor: "#ccc0fb",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: "#fff",
    fontSize: 16
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#7e64ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff"
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  completedText: {
    color: '#7e64ff', // Color del texto para tareas completadas
    fontSize: 16,
  },
  notCompletedText: {
    color: '#ccc', // Color del texto para tareas no completadas
    fontSize: 16,
  },
})