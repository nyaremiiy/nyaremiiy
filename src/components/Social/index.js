import s from './index.module.css';

const Social = () => {
  return (
    <div className={s.social}>
      <a className={s.item} href='#1'>
        <svg className='icon icon-linkedin'>
          <use xlinkHref='#icon-linkedin'></use>
        </svg>
      </a>
      <a className={s.item} href='#1'>
        <svg className='icon icon-github'>
          <use xlinkHref='#icon-github'></use>
        </svg>
      </a>
      <a className={s.item} href='#1'>
        <svg className='icon icon-telegram'>
          <use xlinkHref='#icon-telegram'></use>
        </svg>
      </a>
      <a className={s.item} href='#1'>
        <svg className='icon icon-instagram'>
          <use xlinkHref='#icon-instagram'></use>
        </svg>
      </a>
      <a className={s.item} href='#1'>
        <svg className='icon icon-facebook'>
          <use xlinkHref='#icon-facebook'></use>
        </svg>
      </a>
    </div>
  );
};

export default Social;
