import { CategoryCard } from "./components/CategoryCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import logo from "../src/assets/logo.svg";
import ferramenta from "../src/assets/ferramentas.svg";
import computer from "../src/assets/computer.svg";
import supermercado from "../src/assets/supermercado.svg";
import whiskey from "../src/assets/whiskey.svg";
import saude from "../src/assets/saude.svg";
import moda from "../src/assets/moda.svg";
import corrida from "../src/assets/corrida.svg";
import { Vitrine } from "./components/Vitrine";
import { CategoryMenu } from "./components/CategoryMenu";
import { useState } from "react";
import type { Product } from "./types/Product";
import { ProductModal } from "./components/ProductModal";
import { PartnerCard } from "./components/PartnerCard";
import parceirosBg from "../src/assets/parceiros-bg.png";
import { MarcaCard } from "./components/MarcaCard";
import { Newsletter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";
function App() {
  const categories = [
    "CELULARES",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  const [selectedCategory, setSelectedCategory] = useState("CELULARES");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleConfirmBuy = (product: Product, quantity: number) => {
    console.log("Produto:", product);
    console.log("Quantidade:", quantity);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Categorias  */}
        <section className="justify-center">
          <CategoryCard
            title="Tecnologia"
            image={computer}
            href="/category/teste"
          />
          <CategoryCard
            title="Supermercado"
            image={supermercado}
            href="/category/teste"
          />
          <CategoryCard
            title="Bebidas"
            image={whiskey}
            href="/category/teste"
          />
          <CategoryCard
            title="Ferramentas"
            image={ferramenta}
            href="/category/teste"
          />
          <CategoryCard title="Saúde" image={saude} href="/category/teste" />
          <CategoryCard
            title="Esportes e Fitness"
            image={corrida}
            href="/category/teste"
          />
          <CategoryCard title="Moda" image={moda} href="/category/teste" />
        </section>
        {/* Categorias  */}

        {/* Vitrine de produtos */}
        <section>
          <CategoryMenu
            title="Produtos relacionados"
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <Vitrine onBuy={handleBuy} />
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onBuy={handleConfirmBuy}
            />
          )}
        </section>
        {/* Vitrine de produtos */}

        {/* Parceiros    */}
        <section className="justify-center my3 max-w-lg">
          <PartnerCard
            title="Parceiros"
            description="lorem ipsum dolor sit amet, consectetur"
            image={parceirosBg}
            link="#"
          />
          <PartnerCard
            title="Parceiros"
            description="lorem ipsum dolor sit amet, consectetur "
            image={parceirosBg}
            link="#"
          />
        </section>
        {/* Parceiros    */}

        {/* Vitrine de produtos */}
        <section>
          <h2 className="title">Produtos relacionados</h2>
          <Vitrine onBuy={handleBuy} />
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onBuy={handleConfirmBuy}
            />
          )}
        </section>
        {/* Vitrine de produtos  */}

        {/* Parceiros    */}
        <section className="justify-center my3 max-w-lg ">
          <PartnerCard
            title="Parceiros"
            description="lorem ipsum dolor sit amet, consectetur"
            image={parceirosBg}
            link="#"
          />
          <PartnerCard
            title="Parceiros"
            description="lorem ipsum dolor sit amet, consectetur "
            image={parceirosBg}
            link="#"
          />
        </section>
        {/* Parceiros    */}

        {/* Marcas  */}
        <section>
          <h2 className="title mt6 mb4">Navegue por marcas</h2>
          <div className=" gap42 justify-center mb4">
            <MarcaCard name="logo" logo={logo} link="#" />
            <MarcaCard name="logo" logo={logo} link="#" />
            <MarcaCard name="logo" logo={logo} link="#" />
            <MarcaCard name="logo" logo={logo} link="#" />
            <MarcaCard name="logo" logo={logo} link="#" />
          </div>
        </section>
        {/* Marcas  */}

        {/* Vitrine de produtos */}
        <section>
          <h2 className="title">Produtos relacionados</h2>
          <Vitrine onBuy={handleBuy} />
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onBuy={handleConfirmBuy}
            />
          )}
        </section>
        {/* Vitrine de produtos  */}

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
