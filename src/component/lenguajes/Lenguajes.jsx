import css from './Lenguajes.module.css';
export default function Lenguajes({ direction, name, title }) {
  return (
    <div>
      <img src={direction} alt={name} srcset="" title={title} />
    </div>
  );
}
