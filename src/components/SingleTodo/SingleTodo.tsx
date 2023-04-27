import React from 'react';
import { motion } from 'framer-motion';

import IconButton from '../IconButton/IconButton';

import { SingleTodoProps } from '../../models';

const SingleTodo = ({ handleDeleteTodo, todo, handleCompleteTodo, handleUnCompleteTodo }: SingleTodoProps) => {
  const isComplete = !!todo?.complete;
  const btnColor = 'white';
  return (
    <motion.li
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragCapture={(e) => console.log(e)}
      //   onDragEnd={(e) => {
      //     console.log(e);
      //   }}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        !isComplete ? 'border-maroon bg-maroon text-white' : 'border-my-green bg-my-green text-off-green'
      } border-2  px-4 py-3 font-bold rounded-full flex items-center justify-between cursor-grabbing `}
    >
      <input
        readOnly={true}
        value={todo.text}
        className="bg-transparent w-full mr-2 focus:outline-none cursor-grabbing"
      />
      <div className="flex gap-1">
        <IconButton
          onClick={() => handleDeleteTodo(todo.id)}
          color={btnColor}
          icon={
            <svg className="w-6 h-6 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4L20 20"
                stroke="currentColor"
                strokeOpacity="1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 20L20 4"
                stroke="currentColor"
                strokeOpacity="1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        {handleCompleteTodo && (
          <IconButton
            onClick={() => handleCompleteTodo(todo.id)}
            color={btnColor}
            icon={
              <svg className="w-6 h-6 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 21V11.1L11.1 3C12.5912 3 13.8 4.20883 13.8 5.7V9.3H19.2C19.7281 9.294 20.2321 9.52025 20.5786 9.91875C20.9252 10.3173 21.0793 10.8478 21 11.37L19.758 19.47C19.6234 20.3574 18.8556 21.0102 17.958 21H7.5ZM7.5 21L5.097 20.9998C4.04266 21.0184 3.14135 20.2448 3 19.1998V12.8998C3.14135 11.8548 4.04266 10.9815 5.097 11.0001H7.5V21Z"
                  stroke="currentColor"
                  strokeOpacity="1"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        )}
        {handleUnCompleteTodo && (
          <IconButton
            onClick={() => handleUnCompleteTodo(todo.id)}
            color={btnColor}
            icon={
              <svg className="w-6 h-6 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.18199 4L3 7.182L6.18199 10.3639"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7.18213H14.3361C17.7785 7.18213 20.6061 9.90153 20.7402 13.3413C20.882 16.9761 17.9737 20.0001 14.3361 20.0001H6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        )}
      </div>
    </motion.li>
  );
};

export default SingleTodo;
