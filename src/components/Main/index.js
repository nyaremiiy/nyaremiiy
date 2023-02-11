import s from './index.module.css';
import { useRef, useEffect } from 'react';
import typedText from '../../utils/typed-text';
import arrayWords from '../../data/arrayWords';


const Main = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    typedText(boxRef.current, arrayWords, {
      delay: 2000,
      speed: 30,
      cursorEnd: true,
    });
  }, []);

  return (
    <section className={s.main}>
      <div className={`${s.wrapper} container`}>
          <div className={s.box} ref={boxRef}></div>
          <div className={s.cv}>
            <a className={s.cvLink} href="#1">Download CV</a>
          </div>
      </div>
    </section>
  );
};

export default Main;
