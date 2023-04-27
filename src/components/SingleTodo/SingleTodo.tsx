import React from 'react';
import { SingleTodoProps } from '../../models';
import IconButton from '../IconButton/IconButton';

const SingleTodo = ({ handleDeleteTodo, todo, handleCompleteTodo }: SingleTodoProps) => {
  const isComplete = !!todo?.complete;
  const btnColor = isComplete ? 'white' : 'maroon';
  return (
    <li
      className={`${
        !isComplete ? 'border-black text-maroon' : 'border-my-green bg-my-green text-off-green'
      } border-2  px-4 py-3 font-bold rounded-full flex items-center justify-between `}
    >
      {todo.text}{' '}
      <div className="flex gap-1">
        <IconButton
          onClick={() => handleDeleteTodo(todo.id)}
          color={btnColor}
          icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4L20 20"
                stroke="currentColor"
                stroke-opacity="1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 20L20 4"
                stroke="currentColor"
                stroke-opacity="1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
        {handleCompleteTodo && (
          <IconButton
            onClick={() => handleCompleteTodo(todo.id)}
            color={btnColor}
            icon={
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 21V11.1L11.1 3C12.5912 3 13.8 4.20883 13.8 5.7V9.3H19.2C19.7281 9.294 20.2321 9.52025 20.5786 9.91875C20.9252 10.3173 21.0793 10.8478 21 11.37L19.758 19.47C19.6234 20.3574 18.8556 21.0102 17.958 21H7.5ZM7.5 21L5.097 20.9998C4.04266 21.0184 3.14135 20.2448 3 19.1998V12.8998C3.14135 11.8548 4.04266 10.9815 5.097 11.0001H7.5V21Z"
                  stroke="currentColor"
                  stroke-opacity="1"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        )}
      </div>
    </li>
  );
};

export default SingleTodo;
