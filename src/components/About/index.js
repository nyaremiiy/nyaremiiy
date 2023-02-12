import s from './index.module.css';
import { TitleH2 } from '../index';

const About = () => {
  return (
    <section className={s.about}>
      <div className={`${s.wrapper} container`}>
        <div>
          <TitleH2 text='About Me' />
        </div>
        <div className={s.textBox}>
          <div className={s.p}>
            <span className={s.tag}>{`<p `}</span>
            <span className={s.attr}>class</span>
            <span className={s.tag}>=</span>
            <span className={s.data}>{`"text"`}</span>
            <span className={s.tag}>{`>`}</span>
          </div>
          <div className={s.text}>
            Congratulations!!! Glad to see you on my site. Let's get to know
            each other better, as you probably already know, my name is Nazar. I
            am 21 years old. I have been interested in programming for a long
            time. I started studying and developing the front-end about a year
            ago, and at the moment I am simultaneously studying the back-end
            part. In the future, I plan to develop as a JS full-stack developer.
            I gained some work experience while studying at Beetroot Academy
            courses, I am mostly self-educated, so I am actively looking for a
            creative team of like-minded people where I can gain more experience
            and get closer to my dream.
            <br />I believe that I am a positive, cheerful person who is ready
            to new knowledge and acquaintances. I am open-minded and
            goal-oriented, able to learn quickly. I have active teamwork
            attitude but can also work alone when needed, good personal skills,
            high sense of responsibility. High attention to detail is one of my
            benefits.
            <br />
            <br />
            If you need a website, an online store, or a business card website.
            Contact me, I am always ready to help and provide recommendations
            and promotion of your business.
            <br />
            <br />
            Also, I am always happy to make new acquaintances, join me on
            LinkedIn, write to me wherever it is more convenient for you, don't
            be shy)
          </div>
          <div className={s.p}>
            <span className={s.tag}>{`</p>`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
