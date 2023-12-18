import { useState } from "react";
import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import todos from "./interfaces/Todos";

export default function App() {
  const [todos, setTodos] = useState<todos[]>([]);
  const [name, setName] = useState<string>("");

  const nameChangeHandler = (value: string) => {
    setName(value);
  };

  const addTodoHandler = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: +new Date(), name, isComplete: false }];
    });
    setName("");
  };

  const deleteTodoHandler = (id: string | number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-slate-700 text-4xl font-bold text-center mt-20">Todo List App</h1>

        <Card className="max-w-xl mx-auto mt-7">
          <TodoInput addTodo={addTodoHandler} nameText={name} onNameTextChange={nameChangeHandler} />
          <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
        </Card>
      </div>
    </>
  );
}
