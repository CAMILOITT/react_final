import css from './Index.module.css';
import Knowledge from '../../component/knowledge/Knowledge';
import Projects from '../../component/projects/Projects';
import Contact from '../../component/contact/Contact';
import Social from '../../component/social/Social';
import CopyRight from '../../component/copyRight/CopyRight';
import Presentation from '../../component/presentation/Presentation';
import { Link } from 'wouter';

export default function Index() {
  return (
    <>
      <header className={css.header}>
        <Link href="/bulletin" className={css.bulletin}>
          boletín
        </Link>
        <Presentation msg="AQUÍ VA MI PRESENTACIÓN" />
        <Knowledge />
      </header>
      <main className={css.main}>
        <Projects />
      </main>
      <footer className={css.footer}>
        <h2>Contactar:</h2>
        <Social />
        <Contact />
        <CopyRight />
      </footer>
    </>
  );
}
