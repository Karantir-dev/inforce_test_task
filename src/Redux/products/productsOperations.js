import axios from 'axios'
import productsActions from './productsActions'

axios.defaults.baseURL = 'http://localhost:3000/'

const fetchProducts = () => dispatch => {
  dispatch(productsActions.fetchProductsRequest())
  axios
    .get('products')
    .then(({ data }) => {
      dispatch(productsActions.fetchProductsSuccess(data))
    })
    .catch(err =>
      dispatch(
        productsActions.fetchProductsError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const addProduct = product => dispatch => {
  dispatch(productsActions.addProductRequest())

  axios
    .post('products', product)
    .then(({ data }) => dispatch(productsActions.addProductSuccess(data)))
    .catch(err =>
      dispatch(
        productsActions.addProductError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const editProduct = (productId, product) => dispatch => {
  dispatch(productsActions.editProductRequest())

  axios
    .put(`products/${productId}`, product)
    .then(({ data }) =>
      dispatch(productsActions.editProductSuccess(data.result)),
    )
    .catch(err =>
      dispatch(
        productsActions.editProductError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const deleteProduct = productId => dispatch => {
  dispatch(productsActions.deleteProductRequest())

  axios
    .delete(`products/${productId}`)
    .then(() => dispatch(productsActions.deleteProductSuccess(productId)))
    .catch(err =>
      dispatch(
        productsActions.deleteProductError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const productsOperations = {
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
}

export default productsOperations
