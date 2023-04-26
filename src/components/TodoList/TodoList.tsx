import React from 'react';
import { TodoListProps } from '../../models';

const TodoList = ({ todos, handleDeleteTodo, handleCompleteTodo, title, titleIcon }: TodoListProps) => {
  return (
    <div role="listbox" className="  bg-bg-white-lt  border-maroon rounded-lg p-8 flex-1 lg:max-w-[50%]">
      <div className="flex gap-2 items-center">
        {titleIcon && titleIcon} <h5 className="text-xl font-bold text-maroon">{title}</h5>
      </div>
      <div className="w-full mb-6 mt-4 h-[2px] bg-text-black"></div>
      <ul className="flex flex-col gap-4">
        {todos?.length ? (
          todos.map((t) => {
            return (
              <li className="bg-bg-white px-4 py-3 rounded-lg" key={t.text}>
                {t.text}
              </li>
            );
          })
        ) : (
          <li>0 items in your {title.toLowerCase()}</li>
        )}
      </ul>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
