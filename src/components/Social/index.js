import s from './index.module.css';

const Social = () => {
  return (
    <div className={s.social}>
      <a className={s.item} href='https://www.linkedin.com/in/nyaremiiy/' target="_blank" rel="noreferrer">
        <svg className='icon icon-linkedin'>
          <use xlinkHref='#icon-linkedin'></use>
        </svg>
      </a>
      <a className={s.item} href='https://github.com/nyaremiiy' target="_blank" rel="noreferrer">
        <svg className='icon icon-github'>
          <use xlinkHref='#icon-github'></use>
        </svg>
      </a>
      <a className={s.item} href='https://t.me/n_yaremiiy' target="_blank" rel="noreferrer">
        <svg className='icon icon-telegram'>
          <use xlinkHref='#icon-telegram'></use>
        </svg>
      </a>
      <a className={s.item} href='https://www.instagram.com/n_yaremiiy/' target="_blank" rel="noreferrer">
        <svg className='icon icon-instagram'>
          <use xlinkHref='#icon-instagram'></use>
        </svg>
      </a>
      <a className={s.item} href='https://www.facebook.com/yaremiy.nazar.9/' target="_blank" rel="noreferrer">
        <svg className='icon icon-facebook'>
          <use xlinkHref='#icon-facebook'></use>
        </svg>
      </a>
    </div>
  );
};

export default Social;
