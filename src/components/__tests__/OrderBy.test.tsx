import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OrderBy from '../OrderBy';

jest.mock('@expo/vector-icons', () => ({
    MaterialCommunityIcons: '',
  }));

// Una prueba sencilla para verificar que OrderBy se renderiza correctamente
test('OrderBy se renderiza correctamente', () => {
  // Función simulada para toggleOrderBy
  const toggleOrderBy = jest.fn();

  // Renderiza el componente
  const { getByTestId } = render(
    <OrderBy orderBy="asc" toggleOrderBy={toggleOrderBy} />
  );

  // Verifica que un elemento con el atributo 'testID' "orderBy" esté presente
  const orderByElement = getByTestId('orderBy');
  expect(orderByElement).toBeTruthy();

  // Simula un toque en el botón
  fireEvent.press(orderByElement);

  // Verifica que la función toggleOrderBy se haya llamado
  expect(toggleOrderBy).toHaveBeenCalled();
});
