import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BtnAdd from '../../Components/BtnAdd/BtnAdd'
import ProductList from '../../Components/ProductList/ProductList'
import SortSelect from '../../Components/SortSelect/SortSelect'
import productsOperations from '../../Redux/products/productsOperations'

function ProductListView() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsOperations.fetchProducts())
  }, [dispatch])

  return (
    <div>
      <BtnAdd />
      <SortSelect />
      <ProductList />
    </div>
  )
}

export default ProductListView
