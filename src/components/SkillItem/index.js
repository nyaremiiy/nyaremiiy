import s from './index.module.css';

const SkillItem = (props) => {
  return <div className={s.skill} {...props}>{props.children}<svg className={`icon ${s.icon}`}><use xlinkHref="#icon-skill"></use></svg></div>;
};

export default SkillItem;
