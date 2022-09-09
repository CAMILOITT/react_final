import css from './Projects.module.css';

export default function Projects() {
  return (
    <div className={css.containerProject}>
      <div className={css.projectsFrontEnd}>FRONT-END</div>
      <div className={css.fronEndContainer}>
        <div className={css.nameProject}>nombres</div>
        <div className={css.imgProject}>imágenes</div>
      </div>
    </div>
  );
}
