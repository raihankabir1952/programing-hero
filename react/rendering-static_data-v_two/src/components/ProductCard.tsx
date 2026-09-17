type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

function ProductCard({
  name,
  price,
  category,
  inStock,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p>Category: {category}</p>

      <p className={price > 5000 ? "expensive" : "affordable"}>
        Price: ৳{price}
      </p>

      <p className={inStock ? "available" : "out-of-stock"}>
        {inStock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;