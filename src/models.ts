export interface ToDo {
  id: string;
  text: string;
  complete: boolean;
}

export interface TodoInputProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

export interface TodoListProps {
  todos: ToDo[];
}
