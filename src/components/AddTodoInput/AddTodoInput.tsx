import React from 'react';
import PropTypes from 'prop-types';

import { TodoInputProps } from '../../models';

const AddTodoInput: React.FC<TodoInputProps> = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <div className="my-12">
      <div className="lg:max-w-3xl mx-auto">
        <form onSubmit={handleAddTodo} className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-bg-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.976 6.1938L18.2187 10.4365M2.66248 21.7501L6.905 21.7502L22.4613 6.1938L18.2187 1.95117L2.66235 17.5075L2.66248 21.7501Z"
                  stroke="#2c2c2c"
                  stroke-opacity="1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-transparent transition-all focus:outline-none border-2 border-text-black rounded-lg  block w-full pl-10 p-2.5 text-lg"
              placeholder="Create a new to do"
              required
              value={newTodo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 transition-all border- text-lg font-medium rounded-lg border-2 text-maroon border-maroon  hover:opacity-60  focus:outline-none focus:scale-95"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(AddTodoInput);
