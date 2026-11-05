import "./styles.scss";

interface CategoryMenuProps {
  title: string;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryMenu({
  title,
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryMenuProps) {
  return (
    <section className="category-menu">
      <h2 className="title">{title}</h2>

      <nav className="category-menu__nav" aria-label="Categorias de produtos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-menu__item ${
              selectedCategory === category ? "category-menu__item--active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </nav>
    </section>
  );
}
