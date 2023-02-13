import s from './index.module.css';
import { useRef, useEffect } from 'react';
import typedText from '../../utils/typed-text';
import arrayWords from '../../data/arrayWords';
import resume from '../../resume/nazar_yaremii_resume_front_end.pdf';


const Main = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    typedText(boxRef.current, arrayWords, {
      delay: 500,
      speed: 30,
      cursorEnd: true,
    });
  }, []);

  console.log();

  return (
    <section className={s.main}>
      <div className={`${s.wrapper} container`}>
          <div className={s.box} ref={boxRef}></div>
          <div className={s.cv}>
            <a className={s.cvLink} href={resume} target="_blank" rel="noreferrer">Download CV</a>
          </div>
      </div>
    </section>
  );
};

export default Main;
