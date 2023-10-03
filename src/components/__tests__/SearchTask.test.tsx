import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchTask from '../SearchTask';

// Una prueba sencilla para verificar que SearchTask se renderiza correctamente
test('SearchTask se renderiza correctamente', () => {
  // Función simulada para setSearchTerm
  const setSearchTerm = jest.fn();

  // Renderiza el componente
  const { getByTestId } = render(
    <SearchTask searchTerm="" setSearchTerm={setSearchTerm} />
  );

  // Verifica que un elemento con el atributo 'testID' "search-input" esté presente
  const searchInputElement = getByTestId('search-input');
  expect(searchInputElement).toBeTruthy();

  // Simula un cambio en el texto del input
  fireEvent.changeText(searchInputElement, 'Buscar esta tarea');

  // Verifica que setSearchTerm se haya llamado con el texto correcto
  expect(setSearchTerm).toHaveBeenCalledWith('Buscar esta tarea');
});
