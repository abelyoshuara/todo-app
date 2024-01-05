import { Checkbox, Label, Button } from "flowbite-react";
import Todos from "../interfaces/Todos";
import { FC } from "react";

interface TodoItemProps extends Todos {
  deleteTodo: (id: string | number) => void;
  updateTodo: (id: string | number) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  name,
  isComplete,
  deleteTodo,
  updateTodo,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={`item-${id}`}
        checked={isComplete}
        onChange={() => updateTodo(id)}
      />
      <Label
        htmlFor={`item-${id}`}
        className={isComplete ? "line-through" : ""}
      >
        {name}
      </Label>
      <Button
        className="ms-auto"
        size="xs"
        color="dark"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
