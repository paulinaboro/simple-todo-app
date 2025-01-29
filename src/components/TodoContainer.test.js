import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoContainer from "./TodoContainer";

test("Add new to do", () => {
    render(<TodoContainer />)

    const inputTitle = screen.getAllByPlaceholderText(/Add todo title.../i);
    const inputDescription = screen.getAllByPlaceholderText(/Add description.../i);
    const addButtons = screen.getAllByText(/Submit/i);

    fireEvent.change(inputTitle[0], { target: { value: "New Todo" } });
    fireEvent.change(inputDescription[0], { target: { value: "New Description" } });
    fireEvent.click(addButtons[0]);

    expect(screen.queryByText('New Todo')).toBeInTheDocument();
});


test("Remove new to do", () => {
    render(<TodoContainer />)

    fireEvent.change(screen.getAllByPlaceholderText(/Add todo title.../i)[0], { target: { value: "New Todo" } });
    fireEvent.click(screen.getAllByText(/Submit/i)[0]);

    const deleteButton = screen.getByText('New Todo').closest('li').querySelector('button');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
    expect(screen.queryByText('New Description')).not.toBeInTheDocument();
})
