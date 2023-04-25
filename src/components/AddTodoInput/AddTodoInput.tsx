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
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.976 6.1938L18.2187 10.4365M2.66248 21.7501L6.905 21.7502L22.4613 6.1938L18.2187 1.95117L2.66235 17.5075L2.66248 21.7501Z"
                  stroke="black"
                  stroke-opacity="0.65"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-transparent transition-all focus:outline-none border-2 border-gray-300 hover:border-white focus:border-white text-white  rounded-lg  block w-full pl-10 p-2.5 text-lg"
              placeholder="Create a new to do"
              required
              value={newTodo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 transition-all border-0 text-lg font-medium text-cyan-800 bg-cyan-400 rounded-lg  hover:scale-105 hover:text-white  focus:outline-none focus:scale-95"
          >
            Add
          </button>
        </form>

        <p className="mt-5 leading-[1.6]">
          To-do list apps tend to fall into two categories: the complex and the minimalist.{' '}
        </p>
        <p className="mt-1 ">
          <span className=" text-cyan-400 font-bold ">Fussy</span> is somehow none of these.
        </p>
      </div>
    </div>
  );
};

export default React.memo(AddTodoInput);
