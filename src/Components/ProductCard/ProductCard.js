import s from './ProductCard.module.css'

function ProductCard({ product }) {
  const { imageUrl, name, count } = product
  return (
    <li className={s.item}>
      <img src={imageUrl} alt={name} width={200} height={200} />
      <p>{name}</p>
      <p>Осталось: {count}</p>
    </li>
  )
}

export default ProductCard
