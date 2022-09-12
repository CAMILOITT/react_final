import css from './About.module.css';
import { Link } from 'wouter';
export default function About() {
  return (
    <>
      <Link href="/" className={css.back}>
        Regresar
      </Link>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
