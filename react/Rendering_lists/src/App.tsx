import ProductList from './ProductList'
import { Suspense } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <h1>Product List</h1>
      <Suspense fallback = {<p>Loading....</p>}>
        <ProductList />
      </Suspense>
      
    </div>
  )
}

export default App