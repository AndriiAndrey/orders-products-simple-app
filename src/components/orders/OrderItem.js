import React from 'react'

const OrderItem = ({ order, products, getCurrentOrder, togleModal }) => {
  const getPrice = (cur) => {
    return products.reduce(
      (sum, product) => sum + product.price[cur].value, 0)
  }
  const date = new Date(order.date)
  return (
    <div className="order-item">
      <div onClick={() => getCurrentOrder(order.id)} className="order-item-title">
        <p>{order.title}</p>
      </div>
      <div className="order-item-length" onClick={() => getCurrentOrder(order.id)}>
        <img src="data:image/png;base64,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" alt="icon"/>
        <p>{products.length}</p>
      </div>
      <div className="order-item-date">
        <p>
          {`${date.toLocaleDateString('en-US', { month: '2-digit' })} / ${date.toLocaleDateString('en-US', { year: '2-digit' })}`}
        </p>
        <p>
          {`${date.toLocaleDateString('en-US', { day: '2-digit' })} / ${date.toLocaleDateString('en-US', { month: 'short' })} / ${date.toLocaleDateString('en-US', { year: 'numeric' })}`}
        </p>
      </div>
      <div className="order-item-price">
        <p>{getPrice(0)} $</p>
        <p>{getPrice(1)} UAH</p>
      </div>
      <div
        onClick={() => togleModal('Do you want to delete order?', order)}
        className="order-item-del-icon">
        <img src="https://images.vexels.com/media/users/3/132505/isolated/preview/fec64ffe207b10917bf22370bf606c11-flat-trash-can-icon-by-vexels.png" alt="delete" />
      </div>
    </div>
  )
}

export default OrderItem
