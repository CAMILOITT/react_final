import css from './Projects.module.css';

export default function Projects() {
  
  return (
    <div className={css.containerProject}>
      <div className={css.projectsFrontEnd}>FRONT-END</div>
      <div className={css.frontEndContainer}>
        <div className={css.nameProject}>
          <p className={css.title}>nombres</p>
          <p className={css.title}>nombres</p>
          <p className={css.title}>nombres</p>
        </div>
        <div className={css.imgProject}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
