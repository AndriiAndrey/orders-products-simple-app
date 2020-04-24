import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { setCurrentFilterType } from '../../redux/app-reducer'

const Products = ({ products, currentFilterType, filteredProducts, setCurrentFilterType }) => {
  return (
    <div className="product-container">
      <div className="product-header">
        <h2>Products</h2>
        <p>type :</p>
        <div>
          <select className="product-type-select" onChange={(e) => setCurrentFilterType(e.target.value)} >
            <option value="" selected> None </option>
            <option value="Monitors">Monitors</option>
            <option value="Laptops">Laptops</option>
          </select>
        </div>

      </div>
      <ul>
        {!currentFilterType
          ? products.map(product => (
            <li key={product.id}>
              {<ProductItem product={product} />}
            </li>
          ))
          : filteredProducts.map(product => (
            <li key={product.id}>
              {<ProductItem product={product} />}
            </li>
          ))
        }
      </ul>

    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.appReducer.products,
  currentFilterType: state.appReducer.currentFilterType,
  filteredProducts: state.appReducer.filteredProducts
})
const ProductsContainer = connect(mapStateToProps, { setCurrentFilterType })(Products)

export default ProductsContainer
