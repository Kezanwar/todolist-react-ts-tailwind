import React from 'react';

import Container from '../Container/Container';

import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';
import Cat from '../../assets/japanese-cat.svg';

const Social = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/kez-anwar-dev/',
    alt: 'likedin',
  },
  {
    icon: GitHub,
    link: 'https://github.com/Kezanwar',
    alt: 'github',
  },
];

const Footer = () => {
  return (
    <div className="  w-full mt-12 lg:mt-8">
      <Container className="flex justify-between items-center  mt-auto h-20  ">
        <div className="flex items-center gap-3">
          <p className="text-black">by kez anwar</p>{' '}
        </div>
        <div className="flex gap-3">
          {Social.map((s) => {
            return (
              <a
                key={s.alt}
                rel="noreferrer noopener"
                target="_blank"
                className="transition-all hover:scale-105 active:scale-90"
                href={s.link}
              >
                <img className="h-5.5" src={s.icon} alt={s.alt} />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
