import s from './index.module.css';
import menu from '../../data/menu';
import { ItemMenu } from '../index';
import { useEffect, useState } from 'react';

const Menu = ({ isActiveBurger, setIsActiveBurger }) => {
  const [widthScreen, setWidthScreen] = useState(0);
  useEffect(() => {
    setWidthScreen(document.body.clientWidth);
  }, [widthScreen]);

  return (
    <nav className={`${isActiveBurger ? s.open : ''} ${s.menu}`}>
      <ul className={s.list}>
        {menu.map((item, index) => {
          return (
            <ItemMenu
              {...item}
              key={index}
              setIsActiveBurger={setIsActiveBurger}
              isActiveBurger={isActiveBurger}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
