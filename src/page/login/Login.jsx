import css from './Login.module.css';
import { Link } from 'wouter';

export default function Login() {
  return (
    <div className={css.container}>
      <Link href="/" className={css.back}>
        Regresar
      </Link>
      <form className={css.form}>
        <label htmlFor="email" className={css.label}>
          Correo:
        </label>
        <input
          className={css.input}
          type="email"
          name="user-email"
          id="email"
        />
        <label htmlFor="Password" className={css.label}>
          Contraseña:
        </label>
        <input
          className={css.input}
          type="password"
          name="user-password"
          id="password"
        />
        <input className={css.submit} type="submit" value="enviar" />
      </form>
      <Link href="/register" className={css.linkRegister}>
        Registrarse
      </Link>
    </div>
  );
}
