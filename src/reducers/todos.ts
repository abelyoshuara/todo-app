import { Todo } from "../types/Todo";

export type Action = {
  type: string;
  payload: { id?: string | number; name: string; isComplete: boolean };
};

const initialTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

function todosReducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case "ADD_TODO": {
      const todo = [...todos, { id: +new Date(), ...action.payload }];
      localStorage.setItem("todos", JSON.stringify(todo));
      return todo;
    }

    case "DELETE_TODO": {
      const todo = todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(todo));
      return todo;
    }

    case "UPDATE_TODO": {
      const todo = todos.map((todo: Todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo,
      );
      localStorage.setItem("todos", JSON.stringify(todo));
      return todo;
    }

    default:
      throw new Error("Unknown action.");
  }
}

export { todosReducer, initialTodos };
