import css from './Knowledge.module.css';

export default function knowledge() {
  return (
    <div className={css.containerKnowledge}>
      <h3 className={css.title}>Mis conocimientos</h3>
      <div className={css.containerLenguajes}>
        <img className={`${css.iconHtml} ${css.icon}`} src="" alt="html" />
        <img className={`${css.iconCss} ${css.icon}`} src="" alt="css" />
        <img className={`${css.iconSass} ${css.icon}`} src="" alt="SASS" />
        <img
          className={`${css.iconBootstrap} ${css.icon}`}
          src=""
          alt="bootstrap"
        />
        <img
          className={`${css.iconTailwind} ${css.icon}`}
          src=""
          alt="tailwind"
        />
        <img className={`${css.iconJS} ${css.icon}`} src="" alt="js" />
        <img
          className={`${css.iconUiComponents} ${css.icon}`}
          src=""
          alt="ui-components"
        />
        <img className={`${css.iconReact} ${css.icon}`} src="" alt="React" />
      </div>
    </div>
  );
}
