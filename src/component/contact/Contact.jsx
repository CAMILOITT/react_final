import css from './Contact.module.css';

export default function Contact() {
  return (
    <form className={css.form}>
      <input
        className={(css.text, css.input)}
        type="text"
        name=""
        id="name"
        placeholder="Nombre"
      />
      <input
        className={(css.email, css.input)}
        type="email"
        name=""
        id="email"
        placeholder="Email"
      />
      <textarea
        className={(css.messenger, css.input)}
        name=""
        id="msg"
        cols="30"
        rows="10"
        placeholder="Déjame un mensaje..."
      ></textarea>
      <input className={css.submit} type="submit" value="Enviar" />
    </form>
  );
}
