import { MouseEventHandler, ReactNode, SyntheticEvent } from 'react';

export interface ToDo {
  id: string;
  text: string;
  complete: boolean;
}

export interface ContainerProps {
  className?: string;
}

export type handleAddTodo = (e: React.FormEvent) => void;

export type handleDeleteTodo = (id: string) => void;

export type handleCompleteTodo = (id: string) => void;

export interface TodoInputProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: handleAddTodo;
}

export interface TodoListProps {
  todos: ToDo[];
  handleCompleteTodo?: handleCompleteTodo;
  handleDeleteTodo: handleDeleteTodo;
  title: string;
  titleIcon?: ReactNode;
  type: string;
}
export interface SingleTodoProps {
  todo: ToDo;
  handleCompleteTodo?: handleCompleteTodo;
  handleDeleteTodo: handleDeleteTodo;
}

export interface IconButtonProps {
  icon: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: string;
}

export type SaveToDo = (todo: ToDo) => void;

export type UpdateToDo = (todo: ToDo) => void;

export type RemoveTodo = (id: string) => void;

export type FetchTodos = () => ToDo[] | null;
