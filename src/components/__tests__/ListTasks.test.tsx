import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ListTasks from '../ListTasks';

// Mock de useNavigation y useTaskContext
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('react-native-swipe-list-view', () => {
  return {
    SwipeListView: jest.fn(() => null)
  };
});

jest.mock('@expo/vector-icons', () => ({
  Feather: '',
}));


jest.mock('../../context/TaskContext', () => {
  return {
    useTaskContext: () => ({
      completeTask: jest.fn(),
      deleteTask: jest.fn(),
    }),
  };
});


// Una prueba sencilla para verificar que ListTasks se renderiza correctamente
test('ListTasks se renderiza correctamente', () => {
  // Renderiza el componente
  const { getByTestId } = render(<ListTasks tasks={[]} />);

  // Verifica que un elemento con el atributo 'testID' "listTasks" esté presente
  const listTasksElement = getByTestId('listTasks');
  expect(listTasksElement).toBeTruthy();
});
