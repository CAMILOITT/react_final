import css from './Index.module.css';
import Knowledge from '../../component/knowledge/Knowledge';
import Projects from '../../component/projects/Projects';
import Contact from '../../component/contact/Contact';
import Social from '../../component/social/Social';
import CopyRight from '../../component/copyRight/CopyRight';
import Presentation from '../../component/presentation/Presentation';

export default function Index() {
  return (
    <>
      <header className={css.header}>
        <a
          href="www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className={css.bulletin}
        >
          boletín
        </a>
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
