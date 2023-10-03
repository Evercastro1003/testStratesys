import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterTab from '../FilterTab';

describe('FilterTab', () => {
  it('debe renderizar correctamente', () => {
    const filterData = [
      {
        key: 'all',
        title: 'All',
        MyFunction: jest.fn(),
      },
      {
        key: 'completed',
        title: 'Completed',
        MyFunction: jest.fn(),
      },
      {
        key: 'notCopleted',
        title: 'Not Completed',
        MyFunction: jest.fn(),
      },
    ];

    const { getByText } = render(<FilterTab filterData={filterData} filterBy="all" />);
    
    // Verificar que los botones se rendericen correctamente
    filterData.forEach((filterItem) => {
      const button = getByText(filterItem.title);
      expect(button).toBeDefined();
    });
  });

  it('debe llamar a la función correspondiente al hacer clic en un botón', () => {
    const filterData = [
      {
        key: 'all',
        title: 'All',
        MyFunction: jest.fn(),
      },
      {
        key: 'completed',
        title: 'Completed',
        MyFunction: jest.fn(),
      },
      {
        key: 'notCopleted',
        title: 'Not Completed',
        MyFunction: jest.fn(),
      },
    ];

    const { getByText } = render(<FilterTab filterData={filterData} filterBy="all" />);
    
    // Simular clic en un botón
    fireEvent.press(getByText('Completed'));

    // Verificar que la función correspondiente se haya llamado al hacer clic en el botón
    expect(filterData[1].MyFunction).toHaveBeenCalled();
  });
});
