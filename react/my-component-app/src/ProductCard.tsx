interface ProductCardProps {
  productName: string;
  price: number;
  inStock: boolean;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div className="product-card">
      <h2>{props.productName}</h2>

      <p>Price: ${props.price}</p>

      <p>
        {props.inStock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;