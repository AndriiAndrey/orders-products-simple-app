import { createStore, combineReducers } from 'redux'
import appReducer from './app-reducer'

// for biger app reducer shuld be split in different reducers
const reducers = combineReducers({
  appReducer: appReducer
})

const store = createStore(reducers)

export default store
