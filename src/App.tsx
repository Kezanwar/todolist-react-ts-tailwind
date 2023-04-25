import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { ToDo } from './models';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import AddTodoInput from './components/AddTodoInput/AddTodoInput';
import { saveTodo } from './services/storage';

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<ToDo[]>([]);
  const firstRender = useRef<boolean>(true);

  const handleAddTodo = useCallback(
    (e: React.FormEvent) => {
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

  return (
    <Container className="app">
      <Header />
      <AddTodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      {todos && (
        <ul>
          {todos.map((t) => {
            return <li key={t.text}>{t.text}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default App;
