import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Todos from "./interfaces/Todos";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todos[]>([]);
  const [name, setName] = useState<string>("");
  const [isComplete, setIsComplete] = useState<string>("all");

  const nameChangeHandler = (value: string) => setName(value);
  const isCompleteChangeHandler = (value: string) => {
    filterTodos(value);
    setIsComplete(value);
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

  const updateTodoHandler = (id: string | number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo: Todos) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      );
    });
  };

  useEffect(() => {
    filterTodos(isComplete);

    return () => {
      setFilteredTodos(todos);
    };
  }, [isComplete, todos]);

  const filterTodos = (category: string) => {
    if (category === "all") {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos((prevTodos) =>
        prevTodos.filter((todo) =>
          category === "uncomplete" ? !todo.isComplete : todo.isComplete,
        ),
      );
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
