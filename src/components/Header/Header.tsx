import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <Logo />
      <div className="flex items-center">
        <p className="ml-4 lg:ml-6 text-sm md:text-lg">
          A To-do List built with <span className="text-cyan-400  font-bold">TypeScript</span> &{' '}
          <span className="text-cyan-400  font-bold">ReactJS</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
