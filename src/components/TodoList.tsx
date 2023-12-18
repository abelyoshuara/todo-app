import Todos from "../interfaces/Todos";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todos[];
  deleteTodo: (id: string | number) => void;
}

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className="flex flex-col gap-4 w-full mt-2" id="checkbox">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} deleteTodo={() => deleteTodo(todo.id)} />
      ))}
    </div>
  );
}
