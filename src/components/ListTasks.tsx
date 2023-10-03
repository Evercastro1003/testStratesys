import { FlatList, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Task from './Task'
import { TaskModel } from '../domain/types/TaksModel'
import { SwipeListView } from 'react-native-swipe-list-view'
import { useTaskContext } from '../context/TaskContext'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { TasksProps } from '../domain/interfaces/TasksProps'
import { NavigationTaskProps } from '../domain/interfaces/NavigationTaskProps'

const ListTasks: React.FC<TasksProps> = ({ tasks }) => {
  const navigation = useNavigation<NavigationTaskProps['navigation']>()
  const { completeTask, deleteTask } = useTaskContext()
  

  const renderItem = (data: { item: TaskModel }) => (
    <TouchableHighlight
      onPress={() => completeTask(data.item)}
      style={[styles.rowFront, { backgroundColor: "#7e64ff" }]}
      underlayColor={'#AAA'}
    >
        <Task
          task={data.item}
        />
    </TouchableHighlight>
  );


  const renderHiddenItem = (data: { item: TaskModel }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => navigation.navigate("TaskDetail", {
          task: data.item
        })}
      >
        <Feather name="edit" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
      testID="delete-button-1"
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteTask(data.item.id)}
      >
        <Feather name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  return (
    <View
    testID='listTasks'
    >
      <SwipeListView
        data={tasks}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-160}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  )
}

export default ListTasks

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    width: "95%",
    alignSelf: "center",
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
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: "center",
    alignContent: "center",
    paddingLeft: 15,
    width: "95%"
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
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
  backRightBtnLeft: {
    marginTop: 5,
    backgroundColor: '#007BFF',
    right: 80,
  },
  backRightBtnRight: {
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: '#FF0000',
    right: 0,
  },
})