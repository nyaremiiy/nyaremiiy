import s from './index.module.css';
import { TitleH2, SkillItem } from '../index';
import skills from '../../data/skills';
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <AnimatePresence>
          {isSkillSVisble && (
            <motion.div
              className={s.skillsBox}
              initial={{ height: 0, opacity: 0 }}
              animate={{height: 'auto', opacity: 1}}
              exit={{ height: 0, opacity: 0 }}
              style={{overflow: 'hidden'}}
            >
              {skills.map((skill, index) => {
                return (
                  <SkillItem key={index}>
                    <div>{skill}</div>
                  </SkillItem>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
