import css from './Contact.module.css';

export default function Contact() {
  return (
    <form className={css.form}>
      <input
        className={`${css.name} ${css.input}`}
        type="text"
        name="client-name"
        id="name"
        placeholder="Nombre"
      />
      <input
        className={`${css.email} ${css.input}`}
        type="email"
        name="client-email"
        id="email"
        placeholder="Email"
      />
      <textarea
        className={`${css.messenger} ${css.input}`}
        name="client-msg"
        id="msg"
        cols="30"
        rows="10"
        placeholder="Déjame un mensaje..."
      ></textarea>
      <input className={css.submit} type="submit" value="Enviar" />
    </form>
  );
}
