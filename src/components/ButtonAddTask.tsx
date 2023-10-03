import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { ButtonAddTaskProps } from '../domain/interfaces/ButtonAddTaskProps';

const ButtonAddTask = () => {
    const navigation = useNavigation<ButtonAddTaskProps['navigation']>()

    const handleCreateTask = () => {
        navigation.navigate("CreateTask")
    }
    return (
        <TouchableOpacity
            onPress={handleCreateTask}
            style={styles.button}
        >
            <Feather name="plus-square" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default ButtonAddTask

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: "#3c1f7b",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Sombra en Android
        zIndex: 1, // Z-index para superponer sobre otras vistas
    },
    text: {
        color: "white"
    }
})