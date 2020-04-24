const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'
const SET_CURRENT_FILTER_TYPE = 'SET_CURRENT_FILTER_TYPE'

const initialState = {
  orders: [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc'
    }
  ],
  products: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 1,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 }
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    }
  ],
  currentOrder: [],
  productsToShow: [],
  currentFilterType: '',
  filteredProducts: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: state.orders.filter(order => order.id === action.orderId),
        productsToShow: state.products.filter(product => product.order === action.orderId)
      }
    case SET_CURRENT_FILTER_TYPE:
      return {
        ...state,
        currentFilterType: action.typeValue,
        filteredProducts: state.products.filter(product => product.type === action.typeValue)
      }

    default:
      return state
  }
}

export const getCurrentOrder = (orderId) => ({ type: SET_CURRENT_ORDER, orderId })

export const setCurrentFilterType = (typeValue) => ({ type: SET_CURRENT_FILTER_TYPE, typeValue })

export default appReducer
