import { createReducer } from '@reduxjs/toolkit'
import productsActions from './productsActions'

const products = createReducer([], {
  [productsActions.fetchProductsSuccess]: (_, { payload }) => payload,
  [productsActions.addProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productsActions.editProductSuccess]: (state, { payload }) => {
    return state.map(product => {
      if (product.id === payload.id) {
        const updatedproduct = Object.assign({}, product, payload)
        return updatedproduct
      }
      return product
    })
  },
  [productsActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const isLoading = createReducer(false, {
  [productsActions.fetchProductsRequest]: () => true,
  [productsActions.fetchProductsSuccess]: () => false,
  [productsActions.fetchProductsError]: () => false,
  [productsActions.addProductRequest]: () => true,
  [productsActions.addProductSuccess]: () => false,
  [productsActions.addProductError]: () => false,
  [productsActions.deleteProductRequest]: () => true,
  [productsActions.deleteProductSuccess]: () => false,
  [productsActions.deleteProductError]: () => false,
  [productsActions.editProductRequest]: () => true,
  [productsActions.editProductSuccess]: () => false,
  [productsActions.editProductError]: () => false,
})

const productsReducers = { products, isLoading }
export default productsReducers
