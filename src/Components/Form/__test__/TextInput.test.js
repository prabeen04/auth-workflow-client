import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import TextInput from '../TextInput';

test('should render input  ', () => {
    const { getByTestId } = render(<TextInput />)
    expect(getByTestId('input-wrapper').className).toBe('input-wrapper')
    console.log(getByTestId('input').attributes)
})
test('should render placeholder  ', () => {
    const placeholder = 'type here'
    const { getByTestId } = render(<TextInput placeholder={placeholder}/>)
    console.log(getByTestId('input').attributes.length)
    expect(getByTestId('input').attributes.length).toBe(1)
})
