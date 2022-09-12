import css from './Knowledge.module.css';

import htmlLogo from '../../assets/logoLanguage/html.svg';
import cssLogo from '../../assets/logoLanguage/css.svg';
// import sassLogo from '../../assets/logoLanguage/sass.svg';
import bootstrapLogo from '../../assets/logoLanguage/bootstrap.svg';
import tailwindLogo from '../../assets/logoLanguage/tailwind.svg';
import javascriptLogo from '../../assets/logoLanguage/javascript.svg';
import reactLogo from '../../assets/logoLanguage/react.svg';
import uiComponentsLogo from '../../assets/logoLanguage/ui-components.svg';

export default function knowledge() {
  return (
    <div className={css.containerKnowledge}>
      <h3 className={css.title}>Mis conocimientos</h3>
      <div className={css.containerLenguajes}>
        <img
          className={`${css.iconHtml} ${css.icon}`}
          src={htmlLogo}
          alt="html"
        />
        <img className={`${css.iconCss} ${css.icon}`} src={cssLogo} alt="css" />
        <img
          className={`${css.iconSass} ${css.icon}`}
          // src={sassLogo}
          alt="SASS"
        />
        <img
          className={`${css.iconBootstrap} ${css.icon}`}
          src={bootstrapLogo}
          alt="bootstrap"
        />
        <img
          className={`${css.iconTailwind} ${css.icon}`}
          src={tailwindLogo}
          alt="tailwind"
        />
        <img
          className={`${css.iconJS} ${css.icon}`}
          src={javascriptLogo}
          alt="javascript"
        />
        <img
          className={`${css.iconUiComponents} ${css.icon}`}
          src={uiComponentsLogo}
          alt="ui-components"
        />
        <img
          className={`${css.iconReact} ${css.icon}`}
          src={reactLogo}
          alt="React"
        />
      </div>
    </div>
  );
}
