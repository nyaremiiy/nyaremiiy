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
            am 21 years old. I have been studying and developing for some time
            now, more than a year... At the moment I am developing the front-end
            and starting to learn the back-end part. In the future, he plans to
            develop as a Javascript Full-stack developer.
            <br />I believe that I am a positive, diligent, cheerful person who
            is ready to new knowledge and acquaintances. I am open-minded and
            goal-oriented, able to learn quickly. I have active teamwork
            attitude but can also work alone when needed, good personal skills,
            high sense of responsibility. High attention to detail is one of my
            benefits.
            <br />
            <br />
            If you need a website, an online store, or a business card website.
            Contact me, I am always ready to help and provide recommendations
            and promotion of your business.
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
