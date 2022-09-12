import css from './CopyRight.module.css';
export default function CopyRight() {
  return (
    <div className={css.footer}>
      <p className={css.text}>Todos los derechos reservados</p>
      <p>
        hecho com amor <span className={css.heart}></span> por CAMILO TORRES
      </p>
    </div>
  );
}
