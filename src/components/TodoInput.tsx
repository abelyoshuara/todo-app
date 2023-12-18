import { TextInput, Button, Radio, Label } from "flowbite-react";

interface TodoInputProps {
  addTodo: () => void;
  nameText: string;
  onNameTextChange: (value: string) => void;
}

export default function TodoInput({ addTodo, nameText, onNameTextChange }: TodoInputProps) {
  return (
    <>
      <div className="flex w-full gap-x-4">
        <TextInput type="text" className="w-full" id="todo" value={nameText} onChange={(e) => onNameTextChange(e.target.value)} placeholder="Enter your todo" />
        <Button className="ms-auto" onClick={addTodo}>
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-x-8">
        <div className="flex items-center gap-2">
          <Radio id="all" name="countries" value="USA" defaultChecked />
          <Label htmlFor="all">Show All</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="uncomplete" name="countries" value="USA" />
          <Label htmlFor="uncomplete">Show Uncomplete</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="completed" name="countries" value="USA" />
          <Label htmlFor="completed">Show Compeleted</Label>
        </div>
      </div>
    </>
  );
}
