import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { TodoListProps } from '../../../types/models';

import SingleTodo from '../SingleTodo/SingleTodo';

const TodoList = ({
  type,
  todos,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUnCompleteTodo,
  title,
  titleIcon,
}: TodoListProps) => {
  const count = todos?.length || 0;

  const isComplete = type === 'complete';

  return (
    <div role="listbox" className=" rounded-lg flex-1 lg:max-w-[50%]">
      <div className="flex gap-2  items-center">
        {titleIcon && titleIcon}{' '}
        <h5 className={`text-xl md:text-center font-bold w-full ${!isComplete ? 'text-maroon' : 'text-my-green'}`}>
          {title} <span className="text-black ">({count})</span>
        </h5>
      </div>
      <div className="w-full mb-5 lg:mb-8 mt-4 h-[2px] bg-text-black"></div>
      {todos?.length ? (
        <motion.ul layout className={'flex flex-col gap-5'}>
          <AnimatePresence presenceAffectsLayout={true}>
            {todos.map((t) => {
              return (
                <SingleTodo
                  key={t.id}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCompleteTodo={handleCompleteTodo}
                  handleUnCompleteTodo={handleUnCompleteTodo}
                  todo={t}
                />
              );
            })}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <ul>
          <li className="md:text-center">No items in your {title.toLowerCase()} yet</li>
        </ul>
      )}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
