import "./styles.scss";

interface NewsletterProps {
  onSubscribe?: (data: { name: string; email: string }) => void;
}

export function Newsletter({ onSubscribe }: NewsletterProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    onSubscribe?.(data);
  };

  return (
    <section className="newsletter mt6">
      <div className="newsletter__content max-w-lg">
        <div className="newsletter__info">
          <h2>Inscreva-se na nossa newsletter</h2>

          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              aria-label="Nome"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              aria-label="E-mail"
              required
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" name="terms" required />

            <span>
              Aceito os <a href="/termos-e-condicoes">termos e condições</a>.
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
