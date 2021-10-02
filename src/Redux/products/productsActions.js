import { createAction } from '@reduxjs/toolkit'

const fetchProductsRequest = createAction('FETCH_PRODUCTS_REQUEST')
const fetchProductsSuccess = createAction('FETCH_PRODUCTS_SUCCESS')
const fetchProductsError = createAction('FETCH_PRODUCTS_ERROR')

const addProductRequest = createAction('ADD_PRODUCT_REQUEST')
const addProductSuccess = createAction('ADD_PRODUCT_SUCCESS')
const addProductError = createAction('ADD_PRODUCT_ERROR')

const editProductRequest = createAction('EDIT_PRODUCT_REQUEST')
const editProductSuccess = createAction('EDIT_PRODUCT_SUCCESS')
const editProductError = createAction('EDIT_PRODUCT_ERROR')

const deleteProductRequest = createAction('DELETE_PRODUCT_REQUEST')
const deleteProductSuccess = createAction('DELETE_PRODUCT_SUCCESS')
const deleteProductError = createAction('DELETE_PRODUCT_ERROR')

const productsActions = {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  editProductRequest,
  editProductSuccess,
  editProductError,
}
export default productsActions
