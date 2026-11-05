import "./styles.scss";

interface MarcaCardProps {
  logo: string;
  name: string;
  link: string;
}

export function MarcaCard({ logo, name, link }: MarcaCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="marca-card"
      aria-label={`Visitar página da marca ${name}`}
    >
      <img src={logo} alt={`Logo ${name}`} className="marca-card__logo" />
    </a>
  );
}
