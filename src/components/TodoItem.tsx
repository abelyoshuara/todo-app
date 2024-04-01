import { Checkbox, Label, Button } from "flowbite-react";
import type { Todo } from "../types/Todo";
import { FC } from "react";

interface TodoItemProps extends Todo {
  onDeleteTodo: (id: string | number) => void;
  onUpdateTodo: (id: string | number) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  name,
  isComplete,
  onDeleteTodo,
  onUpdateTodo,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={`item-${id}`}
        checked={isComplete}
        onChange={() => onUpdateTodo(id)}
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
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
