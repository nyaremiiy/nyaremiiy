import s from './index.module.css';

const Button = (props) => {
  return (
    <button {...props} className={s.button}>
      <span>{props.text || 'Default text'}</span>
    </button>
  );
};

export default Button;
