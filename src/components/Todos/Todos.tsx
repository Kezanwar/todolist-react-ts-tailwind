import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ToDo, handleAddTodo, handleCompleteTodo, handleDeleteTodo } from '../../models';
import { v4 } from 'uuid';
import { fetchTodos, removeTodo, saveTodo, updateTodo } from '../../services/storage';
import AddTodoInput from '../AddTodoInput/AddTodoInput';
import TodoList from '../TodoList/TodoList';

import Cat from '../../assets/japanese-cat.svg';
import Bird from '../../assets/japanese-bird.svg';

const Todos = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAddTodo: handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (newTodo) {
        const id = v4();
        const item = { complete: false, id: id, text: newTodo };
        setTodos((prev: ToDo[]) => {
          return [item, ...prev];
        });
        saveTodo(item);
        setNewTodo('');
      }
    },
    [newTodo]
  );
  const handleDeleteTodo: handleDeleteTodo = useCallback((id) => {
    removeTodo(id);
    setTodos((prev: ToDo[]) => {
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const handleCompleteTodo: handleCompleteTodo = useCallback(
    (id) => {
      const iToUpdate = todos.findIndex((el) => el.id === id);
      const newEl = { ...todos[iToUpdate], complete: true };
      updateTodo(newEl);
      setTodos((prev: ToDo[]) => {
        const newArr = [...prev];
        const iToUpdate = newArr.findIndex((el) => el.id === id);
        newArr[iToUpdate].complete = true;
        return newArr;
      });
    },
    [todos]
  );

  const handleUnCompleteTodo: handleCompleteTodo = useCallback(
    (id) => {
      const iToUpdate = todos.findIndex((el) => el.id === id);
      const newEl = { ...todos[iToUpdate], complete: false };
      updateTodo(newEl);
      setTodos((prev: ToDo[]) => {
        const newArr = [...prev];
        const iToUpdate = newArr.findIndex((el) => el.id === id);
        newArr[iToUpdate].complete = false;
        return newArr;
      });
    },
    [todos]
  );

  useEffect(() => {
    const prevTodos = fetchTodos();
    if (prevTodos) {
      setTodos(prevTodos);
    }
  }, []);

  const outstandingTodos: ToDo[] = useMemo(() => {
    if (todos?.length) {
      return todos.filter((t) => !t.complete);
    } else return [];
  }, [todos]);

  const completedTodos: ToDo[] = useMemo(() => {
    if (todos?.length) {
      return todos.filter((t) => t.complete);
    } else return [];
  }, [todos]);

  return (
    <>
      <AddTodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <div className="mt-16  flex flex-col md:flex-row gap-12 lg:gap-36 xl:gap-52">
        <TodoList
          type="outstanding"
          title="Outstanding To-do List"
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todos={outstandingTodos}
          // titleIcon={<img className="h-10" src={Cat} alt="meow" />}
        />
        <TodoList
          type="complete"
          title="Completed To-do List"
          handleDeleteTodo={handleDeleteTodo}
          handleUnCompleteTodo={handleUnCompleteTodo}
          todos={completedTodos}
          // titleIcon={<img className="h-10" src={Bird} alt="squawk" />}
        />
      </div>
    </>
  );
};

export default Todos;
