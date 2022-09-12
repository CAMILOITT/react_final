import css from './Login.module.css';
export default function Login() {
  return (
    <div>
      <form>
        <input type="email" name="user-email" id="email" />
        <input type="password" name="user-password" id="password" />
        <input type="submit" value="enviar" />
      </form>

      <a href="www.google.com">Restablecer contraseña</a>
    </div>
  );
}
