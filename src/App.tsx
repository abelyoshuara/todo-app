import { useMemo, useReducer, useState } from "react";
import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import type { Todo } from "./types/Todo";

type State = { value: number };
type Action = { type: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      throw new Error("Unknown action.");
  }
}

const initialState: State = { value: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("all");
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]"),
  );

  const handleAddTodo = () => {
    setTodos((prevTodos) => {
      const newTodo = [
        ...prevTodos,
        { id: +new Date(), name, isComplete: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
    setName("");
  };

  const handleDeleteTodo = (id: string | number) => {
    setTodos((prevTodos) => {
      const updateTodo = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    });
  };

  const handleUpdateTodo = (id: string | number) => {
    setTodos((prevTodos) => {
      const updateTodo = prevTodos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    });
  };

  const filteredTodos = useMemo(() => {
    if (status === "all") {
      return todos;
    } else {
      return todos.filter((todo) =>
        status === "uncomplete" ? !todo.isComplete : todo.isComplete,
      );
    }
  }, [status, todos]);

  return (
    <div className="container">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20">
        Todo List App
      </h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <hr />
      <span>{state.value}</span>
      <hr />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>

      <Card className="max-w-xl mx-auto mt-7">
        <TodoInput
          onAddTodo={handleAddTodo}
          nameText={name}
          onNameTextChange={setName}
          status={status}
          onStatusCheckboxChange={setStatus}
        />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      </Card>
    </div>
  );
}

export default App;
