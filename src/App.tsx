import React, { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { ToDo } from './models';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import AddTodoInput from './components/AddTodoInput/AddTodoInput';

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAddTodo = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (newTodo) {
        setTodos((prev: ToDo[]) => {
          const id = v4();
          return [...prev, { complete: false, id: id, text: newTodo }];
        });
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
