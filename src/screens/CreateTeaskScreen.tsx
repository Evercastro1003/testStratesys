import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContext';
import { ButtonAddTaskProps } from '../domain/interfaces/ButtonAddTaskProps';

const CreateTeask: React.FC<ButtonAddTaskProps> = ({ navigation }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);

  const { addTask } = useTaskContext()

  const handleCreateItem = () => {
    if (!title || !description) {
      Alert.alert("Warning", "This fields cannot be left empty")
      return
    }

    const newItem = {
      id: Math.random(), // Puedes generar un ID único de la manera que desees
      title,
      description,
      completed,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };

    addTask(newItem);

    // Limpia el formulario después de crear el elemento
    setTitle('');
    setDescription('');
    Alert.alert("Congratulation!", "Your task was created with successfully!")
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholderTextColor="#999"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descripción"
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholderTextColor="#999"
        multiline
      />
      <TouchableOpacity
        onPress={handleCreateItem}
        style={styles.button}
      >
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTeask

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
  }
})