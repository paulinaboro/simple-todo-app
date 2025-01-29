import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from "./TodoItem";

const todo = {
    id: 898989989,
    title: "test todo",
    completed: true,
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
}

const mockChange = jest.fn()
const mockDelete = jest.fn()

test("Render a Todo Item", () => {


    render(<TodoItem todo={todo}
        handleChangeProps={mockChange}
        deleteTodoProps={mockDelete}
    />)

    const todoTitle = screen.getByText(/test todo/i);
    expect(todoTitle).toBeInTheDocument();
})


test("When clicking checkobox call handleChangeProps", () => {

    render(<TodoItem todo={todo} handleChangeProps={mockChange} />)

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockChange).toHaveBeenCalledTimes(1)

})