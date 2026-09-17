import React from 'react';
import ProductsCard from '../components/ProductsCard';

const getProducts = async () => {
    const data = await fetch('http://localhost:3001/products')
    return data.json()
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (

        <div >
            <h2>Total Products: {products.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    )
};

export default ProductsPage;