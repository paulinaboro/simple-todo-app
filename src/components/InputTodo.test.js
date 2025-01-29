import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import InputTodo from "./InputTodo";

test("On form submit call addTodoProps", () => {

    const mockAddTodo = jest.fn();

    render(<InputTodo listId={"sfsfsf"} addTodoProps={mockAddTodo} />)

    fireEvent.change(screen.getByPlaceholderText("Add todo title..."), { target: { value: "New Todo" } });
    fireEvent.change(screen.getByPlaceholderText("Add description..."), { target: { value: "New Description" } });
    fireEvent.click(screen.getByRole('button'));

    expect(mockAddTodo).toHaveBeenCalledTimes(1)

})
