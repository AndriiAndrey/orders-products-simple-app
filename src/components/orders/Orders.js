import React from 'react'
import OrderItem from './OrderItem'
import { connect } from 'react-redux'
import { getCurrentOrder } from '../../redux/app-reducer'

const Orders = ({ orders, products, getCurrentOrder, currentOrder, productsToShow, togleModal }) => {
  return (
    <div className="orders-container">
      <div className="orders-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1n5qqFsdJ9K3jlm9rXd7XYKKknhchOB1y4xG1OHPTFk9Fv13U&usqp=CAU" alt="plus-icon" />
        <h2>Orders</h2>
      </div>
      <div className={currentOrder.length ? 'order-items-wrapper' : '' }>
        <div>
          {
            orders.map(order => (
              <li key={order.id} >
                <OrderItem
                  togleModal={togleModal}
                  getCurrentOrder={getCurrentOrder}
                  order={order} products={products}
                />
              </li>
            ))
          }
        </div>

        <div className="products-list">
          <div className="products-list-header">
            <div>Product name</div>
            <div className="close-icon" onClick={() => getCurrentOrder(0)}>X</div>
          </div>
          <div className="products-list-add-field">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1n5qqFsdJ9K3jlm9rXd7XYKKknhchOB1y4xG1OHPTFk9Fv13U&usqp=CAU" alt="plus-icon" />
            <p>Add product</p>
          </div>

          {
            productsToShow.map(product => (
              <li key={product.id} className="orders-product-view">
                <div>{product.title}</div>
                <div>{product.type}</div>
                <div className="order-product-del-icon">
                  <img src="https://images.vexels.com/media/users/3/132505/isolated/preview/fec64ffe207b10917bf22370bf606c11-flat-trash-can-icon-by-vexels.png" alt="delete" />
                </div>
              </li>
            ))
          }

        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orders: state.appReducer.orders,
  products: state.appReducer.products,
  currentOrder: state.appReducer.currentOrder,
  productsToShow: state.appReducer.productsToShow
})
const OrdersContainer = connect(mapStateToProps, { getCurrentOrder })(Orders)

export default OrdersContainer
