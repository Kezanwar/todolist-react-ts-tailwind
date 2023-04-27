import React from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

import Cat from './assets/japanese-cat.svg';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Container className="app">
        <Header />
        <Todos />
      </Container>
      <Footer />
    </>
  );
};

export default App;
