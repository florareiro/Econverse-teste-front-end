import { useState } from "react";
import "./styles.scss";
import type { Product } from "../../types/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onBuy?: (product: Product, quantity: number) => void;
}

export function ProductModal({ product, onClose, onBuy }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const handleBuy = () => {
    onBuy?.(product, quantity);
  };

  return (
    <div className="product-modal__overlay" onClick={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className="product-modal__image-container">
          <img
            src={product.photo}
            alt={product.productName}
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__content">
          <div>
            <h2 className="product-modal__title">{product.productName}</h2>

            <strong className="product-modal__price">
              {formatPrice(product.price)}
            </strong>
          </div>

          <p className="product-modal__description">
            {product.descriptionShort || product.productName}
          </p>

          <a
            href={product.detailsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="product-modal__link"
          >
            Ver mais detalhes do produto
            <span aria-hidden="true">→</span>
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
              >
                -
              </button>

              <span className="product-modal__quantity-value">{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={handleBuy}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
