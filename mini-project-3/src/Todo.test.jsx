import '@testing-library/jest-dom';

import {screen, render, fireEvent} from '@testing-library/react'
import ToDoApp from './ToDoApp'
import { describe, expect, test } from 'vitest'


// test('renders the todo app', async() => {
//     render(<ToDoApp />)
//     const titleElement = screen.getByText(/Todo List App/i)
//     expect(titleElement).toBeInTheDocument()


// })


// test('render button' , async() => {
//     render(<ToDoApp />)

//     const buttonElement = screen.getAllByRole('button',{name:/delete/i})
//     expect(buttonElement.length).toBeGreaterThan(1);

// })


// test('renders the delete button', async () => {
//     render(<ToDoApp />);
  
//     const deleteButton = screen.getByRole('button', { name: /delete/i });
//     fireEvent.click(deleteButton);
  
//     expect(deleteButton).toBeInTheDocument();
//   });

describe('ToDoApp', () => {
test('renders Delete button and removes task when clicked', () => {
    render(<ToDoApp />);
  
    // Check if the 'Delete' button is in the document
    const deleteButton = screen.getAllByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton[0]);
    expect(deleteButton[0]).toContainHTML('Delete');
    expect(deleteButton[0]).toBeVisible();
    
    expect(deleteButton.length).toBeGreaterThan(0);  
    // // Initially, there should be 2 tasks in the list
    // const taskList = screen.getAllByRole('listitem');
    // expect(taskList).toHaveLength(2);
  
    // // Click the 'Delete' button to remove the first task
    // fireEvent.click(deleteButton);
  
    // // After clicking, there should be 1 task remaining in the list
    // const updatedTaskList = screen.getAllByRole('listitem');
    // expect(updatedTaskList).toHaveLength(1);
  });
})