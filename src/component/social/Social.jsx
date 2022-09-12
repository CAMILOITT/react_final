import css from './Social.module.css';
import linkedin from '../../assets/logo/linkedin.svg';
import gitHub from '../../assets/logo/github.svg';
import instagram from '../../assets/logo/instagram.svg';

export default function Social() {
  return (
    <div className={css.containerNetwork}>
      <a
        className={css.icon}
        href="https://www.linkedin.com/in/end-game-812b6a235/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        className={css.icon}
        href="https://www.instagram.com/camilo_torres_3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        className={css.icon}
        href="https://github.com/CAMILOITT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitHub} alt="github" />
      </a>
    </div>
  );
}
