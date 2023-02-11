import s from './index.module.css';

const ProjectCard = ({ img, title, description, links }) => {
  return (
    <div className={s.projectCard}>
      <div className={s.img}>
        <img src={img} alt={title} />
      </div>
      <h4 className={s.titleCard}>{title}</h4>
      <p className={s.desc}>{description}</p>
      <div className={s.links}>
        <a
          className={s.link}
          href={links.linkGit}
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          className={s.link}
          href={links.linkPage}
          target='_blank'
          rel='noreferrer'
        >
          Live Link
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;
