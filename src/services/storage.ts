import { FetchTodos, RemoveTodo, SaveToDo, ToDo, UpdateToDo } from '../types/models';

const STORAGE_KEYS = {
  TODOS: 'TODOS',
};

export const saveTodo: SaveToDo = (todo) => {
  let currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    const parsedTodos: ToDo[] = JSON.parse(currentTodos);
    parsedTodos.push(todo);
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(parsedTodos));
  } else localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify([todo]));
};

export const removeTodo: RemoveTodo = (id) => {
  let currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    const parsedTodos: ToDo[] = JSON.parse(currentTodos);
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(parsedTodos.filter((t) => t.id !== id)));
  }
};

export const updateTodo: UpdateToDo = (todo) => {
  let currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    let parsedTodos: ToDo[] = JSON.parse(currentTodos);
    const iToUpdate = parsedTodos.findIndex((el) => el.id === todo.id);
    parsedTodos[iToUpdate] = todo;
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(parsedTodos));
  }
};

export const fetchTodos: FetchTodos = () => {
  const currentTodos: string | null = localStorage.getItem(STORAGE_KEYS.TODOS);
  if (currentTodos) {
    const parsedTodos: ToDo[] = JSON.parse(currentTodos);
    return parsedTodos;
  } else return null;
};
