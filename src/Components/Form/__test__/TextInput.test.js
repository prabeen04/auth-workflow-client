import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import TextInput from '../TextInput';

test('should render input  ', () => {
    const { getByTestId } = render(<TextInput />)
    expect(getByTestId('input-wrapper').className).toBe('input-wrapper')
})
