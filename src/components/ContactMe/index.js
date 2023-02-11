import s from './index.module.css';
import { TitleH2, FormContact } from '../index';

const ContactMe = () => {
  return (
    <section className={s.contact}>
      <div className={`${s.wrapper} container`}>
        <TitleH2 text='Contact me' />
        <div className={s.form}>
          <div className={`${s.border} ${s.bLeft}`}></div>
          <div className={`${s.border} ${s.bRight}`}></div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
