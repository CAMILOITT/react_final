import css from './ScrollSpan.module.css';

export default function ScrollSpan() {
  return (
    <span className={css.scroll}>
      scroll
      <span className={css.containerArrow}>
        <span className={css.line}></span>
        <span className={css.tipLeft}></span>
        <span className={css.tipRight}></span>
      </span>
    </span>
  );
}
