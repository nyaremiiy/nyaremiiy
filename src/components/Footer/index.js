import { Link } from 'react-router-dom';
import s from './index.module.css';
import {Logo} from '../index';

const Footer = () => {
  return <footer className={s.footer}>
    <div className={`${s.wrapper} container`}>
      <Link to='/' className={s.logoLink}>
        <Logo/>
      </Link>
      <div className={s.info}>© Copyright 2023 Author: Nazar Yaremiiy. All rights reserved.</div>
    </div>
  </footer>;
};

export default Footer;
