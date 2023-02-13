import s from './index.module.css';
import { TitleH2, SkillItem } from '../index';
import skills from '../../data/skills';
import { useRef, useEffect } from 'react';
import typedText from './../../utils/typed-text';
import skillCode from './../../data/skillCode';

const Skills = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    typedText(codeRef.current, skillCode, {
      delay: 500,
      speed: 50,
      cursorEnd: false,
    });
  }, []);

  return (
    <section className={s.skills}>
      <div className={`${s.wrapper} container`}>
        <TitleH2 text='Skills' />
        <div className={s.code} ref={codeRef}></div>

        <div className={s.skillsBox}>
          {skills.map((skill, index) => {
            return (
              <SkillItem key={index}>
                <div>{skill}</div>
              </SkillItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
