import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { calcularTiempoTranscurrido } from '../utils/calcularTiempoTranscurrido'
import { TaskProps } from '../domain/interfaces/TaskProps'

const Task: React.FC<TaskProps> = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>{task.completed ? <Feather name="check-square" size={24} color="#4CAF50" /> : <Feather name="square" size={24} color="white" />}</Text>
          <Text style={[styles.text, { textDecorationLine: task.completed ? 'line-through' : 'none', color: "#fff" }]}>{task.title}</Text>
          <Text style={[styles.text, { color: "#fff" }]}>|</Text>
          <Text style={[styles.text, { color: "#fff" }]}>{task.completed ? calcularTiempoTranscurrido(task.updatedDate) : calcularTiempoTranscurrido(task.createdDate)}</Text>
        </View>
        <TouchableOpacity onPress={toggleAccordion}>
          <View >
            <Text>{isExpanded ? <Feather name="chevron-up" size={24} color="#fff" /> : <Feather name="chevron-down" size={24} color="#fff" />}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexShrink: 1, width: "90%" }}>
        {isExpanded && <Text style={styles.description}>{task.description}</Text>}
      </View>
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
    fontSize: 18,
    textDecorationColor: '#39414D'
  },
  description: {
    fontWeight: "400",
    fontSize: 18,
    color: "#fff",
    marginVertical: 5
  }
})