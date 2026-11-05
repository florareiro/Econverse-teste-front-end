import "./styles.scss";
import shield from "../../assets/ShieldCheck.svg";
import caminhao from "../../assets/Truck.svg";
import cartao from "../../assets/CreditCard.svg";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import caixa from "../../assets/caixa.svg";
import heart from "../../assets/Heart.svg";
import user from "../../assets/UserCircle.svg";
import carrinho from "../../assets/ShoppingCart.svg";
import coroa from "../../assets/Crown.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-nav1">
        <p className="">
          <img src={shield} alt="Compra 100% segura" width={20} height={20} />
          Compra <span> 100% segura</span>
        </p>
        <p className="">
          <img
            src={caminhao}
            alt="Entrega rápida garantida"
            width={20}
            height={20}
          />
          <span>Frete grátis</span> acima de R$ 200
        </p>
        <p className="">
          <img
            src={cartao}
            alt="Opções de parcelamento facilitadas"
            width={20}
            height={20}
          />
          <span>Parcele</span> suas compras
        </p>
      </div>

      <div className="flex header-nav2">
        <a href="/" title="Ir para a página inicial da Econverse">
          <img src={logo} alt="Logo Econverse" width={139} />
        </a>

        <SearchInput />

        <ul className="flex" role="list">
          <li className="icon-div">
            <a href="/meus-pedidos" aria-label="Acompanhar meus pedidos">
              <img
                src={caixa}
                alt=""
                width={25}
                height={25}
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>
          <li className="icon-div">
            <a href="/favoritos" aria-label="Ver produtos favoritados">
              <img
                src={heart}
                alt=""
                width={32}
                height={32}
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>
          <li className="icon-div">
            <a href="/minha-conta" aria-label="Acessar minha conta">
              <img
                src={user}
                alt=""
                width={32}
                height={32}
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>
          <li className="icon-div">
            <a href="/carrinho" aria-label="Abrir meu carrinho de compras">
              <img
                src={carrinho}
                alt=""
                width={32}
                height={32}
                aria-hidden="true"
                className="icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <nav aria-label="Menu de Categorias Principal">
        <ul className="flex header-nav3" role="list">
          <li>
            <a href="/categorias">TODAS AS CATEGORIAS</a>
          </li>
          <li>
            <a href="/supermercado">SUPERMERCADO</a>
          </li>
          <li>
            <a href="/livros">LIVROS</a>
          </li>
          <li>
            <a href="/moda">MODA</a>
          </li>
          <li>
            <a href="/lancamentos">LANÇAMENTOS</a>
          </li>
          <li>
            <a href="/ofertas">OFERTAS DO DIA</a>
          </li>
          <li className="flex icon-div">
            <a
              href="/assinatura"
              className="flex"
              aria-label="Acessar página de assinatura"
            >
              <img
                src={coroa}
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="icon"
              />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
