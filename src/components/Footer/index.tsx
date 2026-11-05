import "./styles.scss";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content mx-w-lg">
        {/* Coluna 1 - Institucional */}
        <div className="footer__column footer__institutional">
          <img src={logo} alt="Logo Econverse" width={139} />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Logo Econverse" width={24} />
            </a>

            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Logo Econverse" width={24} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <img src={linkedin} alt="Logo Econverse" width={24} />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Institucional */}
        <div className="footer__column">
          <h4>Institucional</h4>

          <ul>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Movimento</a>
            </li>
            <li>
              <a href="#">Trabalhe conosco</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Ajuda */}
        <div className="footer__column">
          <h4>Ajuda</h4>

          <ul>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
            <li>
              <a href="#">Perguntas Frequentes</a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Termos */}
        <div className="footer__column">
          <h4>Termos</h4>

          <ul>
            <li>
              <a href="#">Termos e Condições</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Troca e Devolução</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
