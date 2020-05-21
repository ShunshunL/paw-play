import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import cartReducer from './cart-reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryRecucer from './directory/directory-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryRecucer
})

export default persistReducer(persistConfig, rootReducer)
