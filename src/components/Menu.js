import React from 'react';
import { NavLink } from 'react-router-dom';
import { navI } from './menuNav';

const setActive = ({isActive}) => isActive? 'menu__item menu__item-active': 'menu__item';

export const Menu = () => { 
  return (
    <>
      <nav className='menu'>
          {navI.map((el, index) => {
            return(<NavLink to={el.src} key={index} className={setActive}>{el.title}</NavLink>)
          })}
      </nav>
    </>
  )
}
