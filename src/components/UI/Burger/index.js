import s from './index.module.css';

const Burger = ({ isActiveBurger, setIsActiveBurger }) => {
  return (
    <div
      className={`${isActiveBurger ? s.open : ''} ${s.burger}`}
      onClick={() => setIsActiveBurger(!isActiveBurger)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
