import css from './Projects.module.css';
import galleria from '../../assets/projects/1Endgame1.neocities.org.png';
import movie from '../../assets/projects/webMovie.png';
import counterCrypto from '../../assets/projects/countercrypto.png';

import htmlLogo from '../../assets/logoLanguage/html.svg';
import cssLogo from '../../assets/logoLanguage/css.svg';
import javascriptLogo from '../../assets/logoLanguage/javascript.svg';

export default function Projects() {
  return (
    <div className={css.containerProject}>
      <section className={css.projects}>
        <article className={css.information}>
          <h2 className={css.titleProjects}>web de cuadros</h2>
          <h3 className={css.subtitle}>detalles</h3>
          <p>
            este sitio web tiene como objetivo mostrar los cuadros o dibujos que
            realizo una empresa
          </p>
          <fieldset className={css.containerLenguajes}>
            <legend className={css.subtitleLanguages}>
              lenguajes utilizados
            </legend>
            <img className={css.iconLanguages} src={htmlLogo} alt="Logo html" />
            <img className={css.iconLanguages} src={cssLogo} alt="Logo css" />
          </fieldset>
        </article>
        <div className={css.projectsImg}>
          <img className={css.img} src={galleria} alt="pagina web de endgame" />
          <a
            className={css.linkProject}
            href="https://1endgame1.neocities.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ir al sitio
          </a>
        </div>
      </section>

      <section className={css.projects}>
        <article className={css.information}>
          <h2 className={css.titleProjects}>Web películas</h2>
          <h3 className={css.subtitle}>detalles</h3>
          <p>este sitio web realiza una simulación de un sito de películas</p>
          <fieldset className={css.containerLenguajes}>
            <legend className={css.subtitleLanguages}>
              lenguajes utilizados
            </legend>
            <img className={css.iconLanguages} src={htmlLogo} alt="Logo html" />
            <img className={css.iconLanguages} src={cssLogo} alt="Logo css" />
          </fieldset>
        </article>
        <div className={css.projectsImg}>
          <img className={css.img} src={movie} alt="web de películas" />
        </div>
      </section>

      <section className={css.projects}>
        <article className={css.information}>
          <h2 className={css.titleProjects}>Contador de criptomonedas</h2>
          <h3 className={css.subtitle}>detalles</h3>
          <p>
            Este proyecto lo que hace es calcular el precio actual de la
            criptomonedas como bitcoin,ether, binance, dogeCoin, ect.
          </p>
          <fieldset className={css.containerLenguajes}>
            <legend className={css.subtitleLanguages}>
              lenguajes utilizados
            </legend>
            <img className={css.iconLanguages} src={htmlLogo} alt="Logo html" />
            <img className={css.iconLanguages} src={cssLogo} alt="Logo css" />
            <img
              className={css.iconLanguages}
              src={javascriptLogo}
              alt="Logo javascript"
            />
          </fieldset>
        </article>
        <div className={css.projectsImg}>
          <img
            className={css.img}
            src={counterCrypto}
            alt="Contador de criptomonedas"
          />
        </div>
      </section>
    </div>
  );
}
