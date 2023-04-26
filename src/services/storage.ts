import { FetchTodos, SaveToDo, ToDo } from '../models';

const STORAGE_KEYS = {
  TODOS: 'TODOS',
};

export const saveTodo: SaveToDo = (todo: ToDo) => {
  let currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    const parsedTodos: ToDo[] = JSON.parse(currentTodos);
    parsedTodos.push(todo);
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(parsedTodos));
  } else localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify([todo]));
};

export const fetchTodos: FetchTodos = () => {
  const currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    const parsedTodos: ToDo[] = JSON.parse(currentTodos);
    return parsedTodos;
  } else return null;
};
