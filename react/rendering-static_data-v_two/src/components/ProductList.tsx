import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 85000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 35000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Headphones",
    price: 4500,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 6500,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 2800,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 6,
    name: "Monitor",
    price: 22000,
    category: "Electronics",
    inStock: false,
  },
];

function ProductList() {
  return (
    <div className="product-list">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          inStock={product.inStock}
        />
      ))}

    </div>
  );
}

export default ProductList;