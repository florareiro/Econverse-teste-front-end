import { useEffect, useState } from "react";

import { ProductCard } from "../ProductCard";

import type { Product, ProductsResponse } from "../../types/Product";

import "./styles.scss";

interface VitrineProps {
  onBuy?: (product: Product) => void;
}

const PRODUCTS_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const VISIBLE_PRODUCTS = 4;
const CARD_WIDTH = 304;
const CARD_GAP = 24;

export function Vitrine({ onBuy }: VitrineProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(PRODUCTS_URL);

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data: ProductsResponse = await response.json();

        if (!data.success) {
          throw new Error("Não foi possível carregar os produtos");
        }

        setProducts(data.products);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const maxIndex = Math.max(0, products.length - VISIBLE_PRODUCTS);

  const handleNext = () => {
    setCurrentIndex((previous) => Math.min(previous + 1, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  return (
    <section className="vitrine">
      {loading && <p className="vitrine__message">Carregando produtos...</p>}

      {error && (
        <p className="vitrine__message">
          Não foi possível carregar os produtos.
        </p>
      )}

      {!loading && !error && (
        <div className="vitrine__carousel">
          <button
            type="button"
            className="vitrine__arrow vitrine__arrow--prev"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Produtos anteriores"
          >
            &#8249;
          </button>

          <div className="vitrine__viewport">
            <div
              className="vitrine__track"
              style={{
                transform: `translateX(-${
                  currentIndex * (CARD_WIDTH + CARD_GAP)
                }px)`,
              }}
            >
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  onBuy={onBuy}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="vitrine__arrow vitrine__arrow--next"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Próximos produtos"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
