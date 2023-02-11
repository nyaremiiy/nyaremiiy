import s from './index.module.css';
import { useState, useEffect } from 'react';

const ItemMenu = 
  ({ link, text, isActiveBurger, setIsActiveBurger }) => {
    const [widthScreen, setWidthScreen] = useState(0);
    useEffect(() => {
      setWidthScreen(document.body.clientWidth);
    }, []);

    return (
      <li className={s.item} >
        <a
          className={s.link}
          href={link}
          onClick={() =>
            widthScreen < 1024 && setIsActiveBurger(!isActiveBurger)
          }
        >
          {text}
        </a>
      </li>
    );
  }


export default ItemMenu;
