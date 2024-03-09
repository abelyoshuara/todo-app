import { FC } from "react";
import { TextInput, Button, Radio, Label } from "flowbite-react";

interface TodoInputProps {
  addTodo: () => void;
  nameText: string;
  onNameTextChange: (value: string) => void;
  status: string;
  onStatusCheckboxChange: (value: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({
  addTodo,
  nameText,
  onNameTextChange,
  status,
  onStatusCheckboxChange,
}) => {
  return (
    <>
      <div className="flex w-full gap-x-4">
        <TextInput
          type="text"
          className="w-full"
          id="todo"
          value={nameText}
          onChange={(e) => onNameTextChange(e.target.value)}
          placeholder="Enter your todo"
        />
        <Button className="ms-auto" onClick={addTodo}>
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-x-8">
        <div className="flex items-center gap-2">
          <Radio
            id="all"
            value="all"
            checked={status === "all"}
            onChange={(e) => onStatusCheckboxChange(e.target.value)}
          />
          <Label htmlFor="all">Show All</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="uncomplete"
            value="uncomplete"
            checked={status === "uncomplete"}
            onChange={(e) => onStatusCheckboxChange(e.target.value)}
          />
          <Label htmlFor="uncomplete">Show Uncomplete</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="completed"
            value="completed"
            checked={status === "completed"}
            onChange={(e) => onStatusCheckboxChange(e.target.value)}
          />
          <Label htmlFor="completed">Show Compeleted</Label>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
