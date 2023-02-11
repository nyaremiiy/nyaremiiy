import s from './index.module.css';
import { TitleH2, ProjectCard } from '../index';
import projects from '../../data/projects';

const ProjectsM = () => {
  return (
    <section className={s.projects}>
      <div className={`container ${s.wrapper}`}>
        <TitleH2 text='Projects' />
        <div className={s.cardBox}>
          {projects.map((item, index) => {
            return <ProjectCard key={index} {...item} />;
          })}
        </div>
        <div className={s.linkBox}>
          <a className={s.link} href='https://github.com/nyaremiy'>
            See more projects on my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsM;
