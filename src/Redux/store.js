import { configureStore } from '@reduxjs/toolkit'
import productsReducers from './products/productsReducers'
import sortingReducer from './sorting/sortingReducer'

const store = configureStore({
  reducer: {
    products: productsReducers.products,
    isLoading: productsReducers.isLoading,
    sortingParameter: sortingReducer,
  },
})

export default store
