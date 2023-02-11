import s from './index.module.css';
import { TitleH2 } from '../index';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: custom =>( {
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3
    }
  })
}

const About = () => {
  return (
    <motion.section className={s.about} initial={'hiiden'} whileInView={'visible'}>
      <div className={`${s.wrapper} container`}>
        <div>
          <TitleH2 text='About' />
        </div>
        <motion.div className={s.text} custom={2} variants={textAnimation}>
          {`{/* `}Congratulations! Glad to see you on the site. Well, let's
          start{`;)`} I have been doing programming for a long time. At first,
          it was a hobby that I did not take seriously, but later it grew into
          something much more... <br />
          <br />
          Something about myself... Throughout my life, I have always been
          interested in learning something new, unknown to me so far. That's how
          I came across the programming. Although not everything went well at
          once in education. I would call my character easy and cheerful. I am
          smiling, I like to laugh, and joke, and I try to approach life with
          humor and positivity.
          <br />
          <br />
          About teamwork: I wouldn't say I'm a great team player. Working alone,
          locked in my thoughts and concentrating on work, brings me great
          satisfaction. However, I am always open to new acquaintances that will
          bring me, good friends and like-minded people. Therefore, if you want
          to make friends with me - write, call, don't be shy{`)))`}
          <br />
          <br />
          If you need a website, an online store, or a business card website.
          Contact me, I am always ready to help and provide recommendations and
          promotion of your business.{`*/}`}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
