import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Task from '../Task';

jest.mock('@expo/vector-icons', () => ({
    Feather: '',
}));

// Una prueba para verificar que Task se renderiza correctamente
test('Task se renderiza correctamente', () => {
    // Datos de ejemplo para la tarea
    const task = {
        id: 1,
        title: 'Tarea de ejemplo',
        description: 'Descripción de la tarea',
        completed: false,
        createdDate: '2023-10-02T22:07:57.173Z',
        updatedDate: '2023-10-03T00:38:49.458Z',
    };

    // Renderiza el componente Task con los datos de ejemplo
    const { getByText } = render(<Task task={task} />);

    // Verifica que los elementos de texto y botones estén presentes
    const titleElement = getByText('Tarea de ejemplo');

    expect(titleElement).toBeTruthy();
});
