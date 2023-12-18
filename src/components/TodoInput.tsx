import { FC } from "react";
import { TextInput, Button, Radio, Label } from "flowbite-react";

interface TodoInputProps {
  addTodo: () => void;
  nameText: string;
  onNameTextChange: (value: string) => void;
  compeleteCheckbox: string;
  onCompeleteCheckboxChange: (value: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({
  addTodo,
  nameText,
  onNameTextChange,
  compeleteCheckbox,
  onCompeleteCheckboxChange,
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
            checked={compeleteCheckbox === "all"}
            onChange={(e) => onCompeleteCheckboxChange(e.target.value)}
          />
          <Label htmlFor="all">Show All</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="uncomplete"
            value="uncomplete"
            checked={compeleteCheckbox === "uncomplete"}
            onChange={(e) => onCompeleteCheckboxChange(e.target.value)}
          />
          <Label htmlFor="uncomplete">Show Uncomplete</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="completed"
            value="completed"
            checked={compeleteCheckbox === "completed"}
            onChange={(e) => onCompeleteCheckboxChange(e.target.value)}
          />
          <Label htmlFor="completed">Show Compeleted</Label>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
