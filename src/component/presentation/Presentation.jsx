import css from './Presentation.module.css';

export default function Presentation({ msg }) {
  return (
    <>
      <span className={css.introName}>hola mi nombre es </span>
      <h1 className={css.name}>Camilo Torres</h1>
      <p className={css.msg}>{msg}</p>
      <p className={css.about}>sobre mi</p>
    </>
  );
}
