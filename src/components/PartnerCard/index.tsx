import "./styles.scss";

interface PartnerCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function PartnerCard({
  title,
  description,
  image,
  link,
}: PartnerCardProps) {
  return (
    <article
      className="partner-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="partner-card__content">
        <div className="partner-card__column partner-card__title">
          <h2>{title}</h2>
        </div>

        <div className="partner-card__column partner-card__description">
          <p>{description}</p>
        </div>

        <div className="partner-card__column partner-card__action">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card__button"
          >
            CONFIRA
          </a>
        </div>
      </div>
    </article>
  );
}
