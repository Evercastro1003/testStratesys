import { StyleSheet, Text, TextInput, View, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'

const TaskDetail = ({route}) => {
  const {task } = route.params

  const [title, setTitle ] = useState(task.title)
  const [description, setDescription ] = useState(task.description)
  const [completed, setCompleted] = useState(task.completed)

  const {updateTask} = useTaskContext()

  const handleUpdateTask = () => {
    const updatedTask = { ...task, title, description, completed }
    updateTask(updatedTask)
  }

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        />
      <TextInput
        value={description}
        onChangeText={setDescription}
        />
      <Text>{completed ? 'Completed' : 'Not completed'}</Text>
      <Switch
          onValueChange={() => setCompleted(!completed)}
          value={completed}
        />

        <TouchableOpacity
        onPress={handleUpdateTask}
        >
          <Text>Update</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TaskDetail

const styles = StyleSheet.create({})