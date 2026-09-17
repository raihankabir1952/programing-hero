import { lazy, Suspense } from "react";
import "./App.css";

const ProductList = lazy(() => import("./components/ProductList"));

function App() {
  return (
    <div className="container">

      <h1>Product Store</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>

    </div>
  );
}

export default App;