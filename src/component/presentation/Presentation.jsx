import css from './Presentation.module.css';

export default function Presentation({ occupation, presentation }) {
  return (
    <>
      <h1 className={css.title}>LOREM</h1>
      <span className={css.occupation}>{occupation}</span>
      <p className={css.presentation}>{presentation}</p>
    </>
  );
}
