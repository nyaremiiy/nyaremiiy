import {
  Social,
  Main,
  About,
  Skills,
  ProjectsM,
  ContactMe,
} from '../../components';
import s from './index.module.css';
import { useState } from 'react';

const MainPage = () => {
  const [touchPosition, setTouchPosition] = useState(null);
  const [isOpenSocial, setIsOpenSocial] = useState(false);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 7) {
      setIsOpenSocial(true)
    }

    if (diff < -7) {
      setIsOpenSocial(false)
    }

    setTouchPosition(null);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className={`${isOpenSocial ? s.open : ''} ${s.social}`}>
        <Social />
      </div>
      <Main />
      <About />
      <Skills />
      <ProjectsM />
      <ContactMe />
    </div>
  );
};

export default MainPage;
