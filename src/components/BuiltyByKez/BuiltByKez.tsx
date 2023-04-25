import React from 'react';
import PropTypes from 'prop-types';

const BuiltByKez = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-bold text-white">
        <div className=" text-2xl font-medium" >
          Built by Kez Anwar - Check me out on
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span className="animate-word col-span-full row-span-full ml-2"><a href="">GitHub</a></span>
            <span className="animate-word-delay-1 col-span-full row-span-full ml-2"><a href="">LinkedIn</a></span>
            <span className="animate-word-delay-2 col-span-full row-span-full ml-2"><a href="">Twitter</a></span>
            <span className="animate-word-delay-3 col-span-full row-span-full ml-2"><a href="">Facebook</a></span>
            <span className="animate-word-delay-4 col-span-full row-span-full ml-2"><a href="">Instagram</a></span>
          </div>
        </div>
    </div>
  );
};

BuiltByKez.propTypes = {};

export default BuiltByKez;
