import React from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

import Cat from './assets/japanese-cat.svg';

const App: React.FC = () => {
  return (
    <Container className="app">
      <Header />
      <Todos />
      {/* <img
        className="z-[-1] fixed bottom-4 right-1 lg:bottom-[2rem] lg:right-[2rem] h-[120px] lg:h-[200px]"
        src={Cat}
        alt="meow"
      /> */}
    </Container>
  );
};

export default App;
