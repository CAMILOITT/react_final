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
        <Presentation occupation="Desarrollador FRONT-END" presentation="" />
        <Knowledge />
      </header>
      <main className={css.main}>
        <Projects />
      </main>
      <footer className={css.footer}>
        <h2>Contactar:</h2>
        <Social />
        <Contact />
        <CopyRight className={css.copyRight} />
      </footer>
    </>
  );
}
