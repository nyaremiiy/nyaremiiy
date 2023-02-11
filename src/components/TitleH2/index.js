import s from './index.module.css';

const TitleH2 = (props) => {
  return (
    <h2 {...props} className={s.title}>
      {`// ${props.text}`}
    </h2>
  );
};

export default TitleH2;
