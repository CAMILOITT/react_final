import css from './Projects.module.css';
import galleria from '../../assets/projects/1Endgame1.neocities.org.png';
import movie from '../../assets/projects/webMovie.png';
import counterCrypto from '../../assets/projects/countercrypto.png';

export default function Projects() {
  return (
    <div className={css.containerProject}>
      <div className={css.projects}>
        <div className={css.information}>
          <h2>web de cuadros</h2>
          <h3>detalles</h3>
          <p></p>
        </div>
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
      </div>
      <div className={css.projects}>
        <div className={css.information}>
          <h2>Web películas</h2>
          <h3>detalles</h3>
          <p></p>
        </div>
        <div className={css.projectsImg}>
          <img className={css.img} src={movie} alt="web de películas" />
        </div>
      </div>
      <div className={css.projects}>
        <div className={css.information}>
          <h2>Contador de criptomonedas</h2>
          <h3>detalles</h3>
          <p></p>
        </div>
        <div className={css.projectsImg}>
          <img
            className={css.img}
            src={counterCrypto}
            alt="Contador de criptomonedas"
          />
        </div>
      </div>
    </div>
  );
}
