import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonProps } from '../../models';

const IconButton = ({ icon, color, onClick }: IconButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      //   className=" border-2  bg-maroon border-transparent  text-bg-white focus:outline-none font-medium rounded-full transform transition-all active:scale-[0.8] text-sm p-2 text-center inline-flex items-center"
      className={` text-${color} focus:outline-none font-medium rounded-full transform transition-all active:scale-[0.8] text-sm p-1 text-center inline-flex items-center`}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {};

export default IconButton;
