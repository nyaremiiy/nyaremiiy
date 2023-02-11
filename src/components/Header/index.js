import s from './index.module.css';
import { BlurScreen, Logo, Menu, Burger } from '../index';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setHeaightHeader }) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const headerRef = useRef(null);


  useEffect(() => {
    setHeaightHeader(headerRef.current.clientHeight);
  }, [setHeaightHeader]);

  if (isActiveBurger) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }

  return (
    <>
      {isActiveBurger && <BlurScreen />}
      <header
        className={s.header}
        ref={headerRef}     
      >
        <div className={`${s.wrapper} container`}>
          <Link to='/' className={s.link}>
            <Logo
            />
          </Link>
          <div className={s.blockL}>
            <Menu
              isActiveBurger={isActiveBurger}
              setIsActiveBurger={setIsActiveBurger}
            />
            <Burger
              isActiveBurger={isActiveBurger}
              setIsActiveBurger={setIsActiveBurger}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
