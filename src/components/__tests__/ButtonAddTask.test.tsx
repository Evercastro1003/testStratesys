import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonAddTask from '../ButtonAddTask';
import { useNavigation } from '@react-navigation/native';

// Mock de la función useNavigation
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@expo/vector-icons', () => ({
  Feather: '',
}));

describe('ButtonAddTask', () => {
  it('debe renderizar correctamente', () => {
    // Simulamos una función de navegación ficticia
    const navigation = {
      navigate: jest.fn(),
    };
    
    // Utilizamos useNavigation con el mock de navegación
    //@ts-ignore
    useNavigation.mockReturnValue(navigation);

    const { getByTestId } = render(<ButtonAddTask />);
    const button = getByTestId('button-add-task');

    // Verificar que el componente se renderiza correctamente
    expect(button).toBeDefined();
  });

  it('debe navegar al componente "CreateTask" al hacer clic', () => {
    // Simulamos una función de navegación ficticia
    const navigation = {
      navigate: jest.fn(),
    };
    
    // Utilizamos useNavigation con el mock de navegación
    //@ts-ignore
    useNavigation.mockReturnValue(navigation);

    const { getByTestId } = render(<ButtonAddTask />);
    const button = getByTestId('button-add-task');

    // Simular un clic en el botón
    fireEvent.press(button);

    // Verificar que se ha navegado a "CreateTask"
    expect(navigation.navigate).toHaveBeenCalledWith('CreateTask');
  });
});
