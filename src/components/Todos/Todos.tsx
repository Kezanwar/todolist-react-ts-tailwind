import React, { useCallback, useEffect, useState } from 'react';
import { ToDo, handleAddTodo, handleCompleteTodo, handleDeleteTodo } from '../../models';
import { v4 } from 'uuid';
import { fetchTodos, saveTodo } from '../../services/storage';
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
          return [...prev, item];
        });
        saveTodo(item);
        setNewTodo('');
      }
    },
    [newTodo]
  );
  const handleDeleteTodo: handleDeleteTodo = useCallback((id) => {
    setTodos((prev: ToDo[]) => {
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const handleCompleteTodo: handleCompleteTodo = useCallback((id) => {
    setTodos((prev: ToDo[]) => {
      const newArr = [...prev];
      const iToUpdate = newArr.findIndex((el) => el.id === id);
      newArr[iToUpdate].complete = true;
      return newArr;
    });
  }, []);

  useEffect(() => {
    const prevTodos = fetchTodos();
    if (prevTodos) {
      setTodos(prevTodos);
    }
  }, []);

  return (
    <>
      <AddTodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <div className="flex flex-col lg:flex-row gap-6">
        <TodoList
          title="Outstanding To-do List"
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todos={todos}
          titleIcon={<img className="h-10" src={Cat} alt="meow" />}
        />
        <TodoList
          title="Completed To-do List"
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todos={todos}
          titleIcon={<img className="h-10" src={Bird} alt="squawk" />}
        />
      </div>
    </>
  );
};

export default Todos;
