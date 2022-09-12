import css from './Register.module.css';
import { Link } from 'wouter';

export default function Register() {
  return (
    <div className={css.container}>
      <Link href="/" className={css.back}>
        Regresar
      </Link>
      <form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Nombre:
        </label>
        <input className={css.input} type="text" name="user-name" id="name" />
        <label htmlFor="nickname" className={css.label}>
          Nickname:
        </label>
        <input
          className={css.input}
          type="text"
          name="user-nickname"
          id="nickname"
        />
        <label htmlFor="email" className={css.label}>
          Correo:
        </label>
        <input
          className={css.input}
          type="email"
          name="user-email"
          id="email"
        />
        <label htmlFor="password" className={css.label}>
          Contraseña
        </label>
        <input
          className={css.input}
          type="password"
          name="user-password"
          id="password"
        />
        <label htmlFor="repeatPassword" className={css.label}>
          repetir contraseña
        </label>
        <input
          className={css.input}
          type="password"
          name="user-repeatPassword"
          id="repeatPassword"
        />
        <input type="submit" value="Enviar" className={css.submit} />
      </form>
      <Link href="/login" className={css.linkLogin}>
        iniciar sesión
      </Link>
    </div>
  );
}
