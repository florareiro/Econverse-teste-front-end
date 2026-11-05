import "./styles.scss";
import type { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
  onBuy?: (product: Product) => void;
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <p className="product-card__description">{product.productName}</p>

        <div className="product-card__prices">
          <span className="product-card__old-price">
            {formatPrice(product.oldPrice ?? 30.9)}
          </span>

          <strong className="product-card__price">
            {formatPrice(product.price)}
          </strong>

          <p className="product-card__parcelamento">
            {product.parcelamento || "ou 2x de R$ 49,95 sem juros"}
          </p>

          <p className="product-card__frete">
            {product.frete || "Frete grátis"}
          </p>
        </div>

        <button
          type="button"
          className="product-card__button"
          onClick={() => onBuy?.(product)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
}
