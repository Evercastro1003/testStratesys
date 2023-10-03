import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ListTasks from '../components/ListTasks'
import { useTaskContext } from '../context/TaskContext'
import ButtonAddTask from '../components/ButtonAddTask'
import SearchTask from '../components/SearchTask'
import FilterTab from '../components/FilterTab'
import { colors } from "../utils/constants"
import OrderBy from '../components/OrderBy'

const ToDoList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filterBy, setFilterBy] = useState<"completed" | "notCopleted" | "all">("all");
  const [orderBy, setOrderBy] = useState<"asc" | "desc">()
  const { tasks } = useTaskContext()

  const filteredData = tasks?.data?.filter((task) => {
    const titleMatches = task?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterBy === "all") {
      return titleMatches; // Mostrar todas las tareas si no hay filtro
    } else if (filterBy === "completed") {
      return titleMatches && task?.completed === true;
    } else if (filterBy === "notCopleted") {
      return titleMatches && task?.completed === false;
    }
  }).sort((a, b) => {
    // Ordena por createdDate en orden descendente (de más reciente a más antigua)
    const dateA = new Date(a.createdDate).getTime();
    const dateB = new Date(b.createdDate).getTime();
    return orderBy === "asc" ? dateA - dateB : dateB - dateA;
  });

  const toggleOrderBy = () => {
    // Cambia la dirección de ordenamiento al hacer clic en un botón
    setOrderBy(orderBy === "asc" ? "desc" : "asc");
  }

  const handleClean = () => {
    setFilterBy("all")
    setSearchTerm("")
  }

  const filterTab = [
    {
      key: 'all',
      title: 'All',
      MyFunction: handleClean,
    },
    {
      key: 'completed',
      title: 'Completed',
      MyFunction: () => setFilterBy("completed"),
    },
    {
      key: 'notCopleted',
      title: 'Not copleted',
      MyFunction: () => setFilterBy("notCopleted"),
    }
  ]

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <View style={styles.SearchOrderContainer}>
        <SearchTask
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <OrderBy
          orderBy={orderBy}
          toggleOrderBy={toggleOrderBy}
        />
      </View>
      <FilterTab filterData={filterTab} filterBy={filterBy} />
      <ListTasks tasks={filteredData} />
      <ButtonAddTask />
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  SearchOrderContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row"
  }
})