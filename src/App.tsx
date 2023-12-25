import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Todos from "./interfaces/Todos";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [name, setName] = useState<string>("");
  const [isComplete, setIsComplete] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<Todos[]>([]);

  const nameChangeHandler = (value: string) => setName(value);
  const isCompleteChangeHandler = (value: string) => {
    setIsComplete(value);
  };

  const getTodos = () => JSON.parse(localStorage.getItem("todos") || "[]");

  const addTodoHandler = () => {
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

  const deleteTodoHandler = (id: string | number) => {
    setTodos((prevTodos) => {
      const updateTodo = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    });
  };

  const updateTodoHandler = (id: string | number) => {
    setTodos((prevTodos) => {
      const updateTodo = prevTodos.map((todo: Todos) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    });
  };

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  useEffect(() => {
    filterTodos();
  }, [isComplete, todos]);

  const filterTodos = () => {
    if (isComplete === "all") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        isComplete === "uncomplete" ? !todo.isComplete : todo.isComplete,
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-slate-700 text-4xl font-bold text-center mt-20">
          Todo List App
        </h1>

        <Card className="max-w-xl mx-auto mt-7">
          <TodoInput
            addTodo={addTodoHandler}
            nameText={name}
            onNameTextChange={nameChangeHandler}
            compeleteCheckbox={isComplete}
            onCompeleteCheckboxChange={isCompleteChangeHandler}
          />
          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodoHandler}
            updateTodo={updateTodoHandler}
          />
        </Card>
      </div>
    </>
  );
}

export default App;
