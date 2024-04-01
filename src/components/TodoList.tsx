import { FC } from "react";
import Todos from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todos[];
  onDeleteTodo: (id: string | number) => void;
  onUpdateTodo: (id: string | number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  return (
    <div className="flex flex-col gap-4 w-full mt-2" id="checkbox">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
            onUpdateTodo={() => onUpdateTodo(todo.id)}
          />
        ))
      ) : (
        <p className="text-red-700 mb-0">Todo is empty!</p>
      )}
    </div>
  );
};

export default TodoList;
