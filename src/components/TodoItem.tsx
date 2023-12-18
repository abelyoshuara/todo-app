import { Checkbox, Label, Button } from "flowbite-react";
import Todos from "../interfaces/Todos";

interface TodoItemProps extends Todos {
  deleteTodo: (id: string | number) => void;
}

export default function TodoItem({ id, name, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id={`item-${id}`} />
      <Label htmlFor={`item-${id}`}>{name}</Label>
      <Button className="ms-auto" size="xs" color="dark" onClick={() => deleteTodo(id)}>
        Delete
      </Button>
    </div>
  );
}
