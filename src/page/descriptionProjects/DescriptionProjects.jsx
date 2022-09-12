import CopyRight from '../../component/copyRight/CopyRight';
import css from './DescriptionProjects.module.css';

export default function DescriptionProjects({ title, lenguajes }) {
  return (
    <div>
      <header>
        <button></button>
      </header>
      <main>
        <h1>{title}</h1>
        <img src="" alt="" />
        <h2>Tecnologías</h2>
        <ul>
          <li>{lenguajes}</li>
        </ul>
      </main>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
}
