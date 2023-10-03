import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContext';

const CreateTeask = ({ navigation }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);

  const { addTask } = useTaskContext()

  const handleCreateItem = () => {
    if(title === "") {
      Alert.alert("Warning", "This input title is empty")
      return
    }

    if(description === ""){
      Alert.alert("Warning", `This input description is empty`)
      return
    }

    const newItem = {
      id: Math.random(), // Puedes generar un ID único de la manera que desees
      title,
      description,
      completed,
    };

    addTask(newItem);

    // Limpia el formulario después de crear el elemento
    setTitle('');
    setDescription('');
    setCompleted(false);
    Alert.alert("Congratulation!", "Your task was created with successfully!")
    navigation.goBack()
  };

  return (
    <View>
      <Text>Create Task</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Button
          title="Crear Elemento"
          onPress={handleCreateItem}
        />
      </View>
    </View>
  )
}

export default CreateTeask

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
  },
})