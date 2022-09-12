import css from './Contact.module.css';

export default function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={css.form} onSubmit={handleOnSubmit}>
      <input
        className={`${css.name} ${css.input}`}
        type="text"
        name="client-name"
        id="name"
        placeholder="Nombre"
        required
      />
      <input
        className={`${css.email} ${css.input}`}
        type="email"
        name="client-email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea
        className={`${css.messenger} ${css.input}`}
        name="client-msg"
        id="msg"
        cols="30"
        rows="10"
        placeholder="Déjame un mensaje..."
        required
      ></textarea>
      <input
        className={css.submit}
        type="submit"
        value="Enviar"
      />
    </form>
  );
}
