import css from './Contact.module.css';

export default function Contact() {
  return (
    <form className={css.form}>
      <input className={(css.text, css.input)} type="text" name="" id="" />
      <input className={(css.email, css.input)} type="email" name="" id="" />
      <textarea
        className={(css.messenger, css.input)}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input className={css.submit} type="submit" value="Enviar" />
    </form>
  );
}
