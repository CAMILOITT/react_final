import css from './Register.module.css';

export default function Register() {
  return (
    <div>
      <form>
        <input type="text" name="user-name" id="name" />
        <input type="text" name="user-nickname" id="nickname" />
        <input type="email" name="user-email" id="email" />
        <input type="password" name="user-password" id="password" />
      </form>
    </div>
  );
}
