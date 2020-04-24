import React from 'react'

const ProductItem = ({ product }) => {
  const dateStart = new Date(product.guarantee.start)
  const dateEnd = new Date(product.guarantee.end)

  return (
    <div className="product-item">
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.type}</p>
      </div>
      <div>
        <p>c {`${dateStart.toLocaleDateString('en-US', { day: '2-digit' })} / ${dateStart.toLocaleDateString('en-US', { month: '2-digit' })} / ${dateStart.toLocaleDateString('en-US', { year: 'numeric' })}`}</p>
        <p>по {`${dateEnd.toLocaleDateString('en-US', { day: '2-digit' })} / ${dateEnd.toLocaleDateString('en-US', { month: '2-digit' })} / ${dateEnd.toLocaleDateString('en-US', { year: 'numeric' })}`}</p>
      </div>
      <div>
        <p>{product.price[0].value} $</p>
        <p>{product.price[1].value} UAH</p>
      </div>
      <div>
        <p>Order: {product.order}</p>
      </div>

    </div>
  )
}

export default ProductItem
