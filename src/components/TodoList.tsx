import { FC } from "react";
import Todos from "../interfaces/Todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todos[];
  deleteTodo: (id: string | number) => void;
  updateTodo: (id: string | number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="flex flex-col gap-4 w-full mt-2" id="checkbox">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={() => deleteTodo(todo.id)}
            updateTodo={() => updateTodo(todo.id)}
          />
        ))
      ) : (
        <p className="text-red-700 mb-0">Todo is empty!</p>
      )}
    </div>
  );
};

export default TodoList;
