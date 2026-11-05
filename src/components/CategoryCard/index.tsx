import "./styles.scss";

interface CardProps {
  title: string;
  image: string;
  href: string;
  alt?: string;
}

export function CategoryCard({ title, image, href, alt }: CardProps) {
  return (
    <a href={href} className="icon-card" aria-label={title}>
      <div className="icon-card__container">
        <img
          src={image}
          alt={alt}
          className="icon-card__image"
          aria-hidden={alt === "" ? true : undefined}
        />
      </div>

      <span className="icon-card__title">{title}</span>
    </a>
  );
}
