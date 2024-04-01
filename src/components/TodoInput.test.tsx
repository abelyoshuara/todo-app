/**
 * test scenario for TodoInput
 *
 * - TodoInput component
 *   - should handle todo input correctly
 *   - should call onAddTodo function when add button is clicked
 *
 */

import { render, screen, userEvent } from "../utils/test-utils";
import TodoInput from "./TodoInput";

describe("TodoInput component", () => {
  it("should handle todo input correctly", async () => {
    render(
      <TodoInput
        onAddTodo={() => {}}
        nameText="todotest"
        onNameTextChange={(value) => value}
        status=""
        onStatusCheckboxChange={(value) => value}
      />,
    );

    const todoInput = await screen.getByPlaceholderText(/enter your todo/i);
    expect(todoInput).toHaveValue("todotest");
  });

  it("should call onAddTodo function when add button is clicked", async () => {
    const mockAddTodo = vi.fn();

    render(
      <TodoInput
        onAddTodo={mockAddTodo}
        nameText="todotest2"
        onNameTextChange={(value) => value}
        status=""
        onStatusCheckboxChange={(value) => value}
      />,
    );

    const addButton = await screen.getByRole("button", { name: "Add" });
    await userEvent.click(addButton);

    expect(mockAddTodo).toHaveBeenCalled();
  });
});
