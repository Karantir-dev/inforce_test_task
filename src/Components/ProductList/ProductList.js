import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import s from './ProductList.module.css'

function ProductList() {
  const products = useSelector(state => state.products)
  const sortingParameter = useSelector(state => state.sortingParameter)

  const sortedProducts = [...products]

  sortingParameter === 'name'
    ? sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
    : sortedProducts.sort((a, b) => a.count - b.count)

  return (
    <ul className={s.list}>
      {sortedProducts.map(el => {
        const { id } = el

        return <ProductCard key={id} product={el} />
      })}
    </ul>
  )
}
export default ProductList
