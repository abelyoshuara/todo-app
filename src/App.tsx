import { useMemo, useReducer, useState } from "react";
import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { Action, initialTodos, todosReducer } from "./reducers/todos";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("all");

  const filteredTodos = useMemo(() => {
    return status === "all"
      ? todos
      : todos.filter((todo) =>
          status === "uncomplete" ? !todo.isComplete : todo.isComplete,
        );
  }, [status, todos]);

  const handleAddTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { name, isComplete: false },
    } as Action);
    setName("");
  };

  const handleDeleteTodo = (id: string | number) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    } as Action);
  };

  const handleUpdateTodo = (id: string | number) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id },
    } as Action);
  };

  return (
    <div className="container">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20">
        Todo List App
      </h1>

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
