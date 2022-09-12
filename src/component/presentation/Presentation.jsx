import css from './Presentation.module.css';
import { Link } from 'wouter';

export default function Presentation({ msg }) {
  return (
    <>
      <span className={css.introName}>hola mi nombre es </span>
      <h1 className={css.name}>Camilo Torres</h1>
      <p className={css.msg}>{msg}</p>

      <a className={css.about} href="/about">
        sobre mi
      </a>

      <Link href="/about">
        <span>about</span>
      </Link>
    </>
  );
}
