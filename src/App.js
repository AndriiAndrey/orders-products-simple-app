import React, { useRef } from 'react'
import TopMenu from './components/topMenu/TopMenu'
import NavigationMenu from './components/navigationMenu/NavigationMenu'
import Orders from './components/orders/Orders'
import Products from './components/products/Products'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import store from './redux/store'
import Modal from './assets/Modal'

const App = () => {
  const modalRef = useRef()

  const togleModal = (str, order) => {
    modalRef.current.togleModal(str, order)
  }

  return (
    <div className="app-wrapper">
      <Modal ref={modalRef}/>
      <TopMenu/>
      <NavigationMenu/>
      <div className="app-wrapper-content">
        <Switch>
          <Route exact path='/' render={ () => <Redirect to={'/orders'}/> }/>
          <Route path='/products' render={() => <Products />} />
          <Route path='/orders' render={() => <Orders togleModal={togleModal} />} />
          <Route path='*' render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
      </div>
    </div>
  )
}

const AppContainer = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
}

export default AppContainer
