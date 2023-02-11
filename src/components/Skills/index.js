import s from './index.module.css';
import { TitleH2, SkillItem } from '../index';
import skills from '../../data/skills';
import { useRef, useEffect, useState } from 'react';
import typedText from './../../utils/typed-text';
import skillCode from './../../data/skillCode';

const Skills = () => {
  const codeRef = useRef(null);
  const [isSkillSVisble, setIsSkillSVisble] = useState(false);

  useEffect(() => {
    typedText(codeRef.current, skillCode, {
      delay: 2000,
      speed: 100,
      cursorEnd: false,
    });
  }, []);

  return (
    <section className={s.skills}>
      <div className={`${s.wrapper} container`}>
        <TitleH2 text='Skills' />
        <div
          className={s.code}
          ref={codeRef}
          onClick={() => setIsSkillSVisble(!isSkillSVisble)}
        ></div>
        {isSkillSVisble && (
          <div className={s.skillsBox}>
            {skills.map((skill, index) => {
              return (
                <SkillItem key={index}>
                  <div>{skill}</div>
                </SkillItem>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
