import React from 'react';
import Logo from '../Logo/Logo';
import { v4 } from 'uuid';

import TeaPot from '../../assets/japanese-tea-pot.svg';
import SunFlag from '../../assets/japanese-sun-flag.svg';
import Fan from '../../assets/japanese-hand-fan.svg';
import Fertilizer from '../../assets/japanese-fertilizer.svg';

const icons = [SunFlag, Fan, Fertilizer, TeaPot];

const Header: React.FC = () => {
  return (
    <header className="">
      <div className="flex justify-between text-maroon">
        <Logo />
        <div className="flex items-center gap-3 md:gap-6">
          {icons.map((i) => {
            const alt = v4();
            return <img className="h-10 w-10 " key={alt} src={i} alt={alt} />;
          })}
        </div>
      </div>
      <div className="flex flex-col md:items-center md:justify-center mt-12">
        <h4 className="leading-[1.3] md:text-center font-extrabold text-2xl">
          A To-do List built with <span className="text-maroon  font-bold">TypeScript</span> &{' '}
          <span className="text-maroon  font-bold">ReactJS</span>
        </h4>
        <p className="mt-5 leading-[1.5] md:text-center">
          To-do list apps tend to fall into two categories: the <em className="font-bold">complex</em> and the{' '}
          <em className="font-bold">minimalist.</em>{' '}
        </p>
        <p className="mt-2 leading-[1.5 md:text-center">
          <span className=" text-maroon font-bold  ">Fussy</span> is somehow none of these.
        </p>
      </div>
    </header>
  );
};

export default Header;
