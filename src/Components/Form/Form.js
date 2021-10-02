import { useState } from 'react'
import { useDispatch } from 'react-redux'
import productsOperations from '../../Redux/products/productsOperations'

import s from './Form.module.css'

function Form({ close }) {
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState('')

  const dispatch = useDispatch()

  function addNewProduct(e) {
    e.preventDefault()

    const product = {
      imageUrl,
      name,
      count,
      size: {
        width,
        height,
      },
      weight,
    }

    dispatch(productsOperations.addProduct(product))
    close()
  }

  return (
    <>
      <h3>Новый продукт</h3>
      <form className={s.form} onSubmit={addNewProduct}>
        <label className={s.label}>
          Изображение
          <input
            required
            type="url"
            value={imageUrl}
            onChange={e => setImageUrl(e.currentTarget.value)}
          />
        </label>
        <label className={s.label}>
          Название
          <input
            required
            type="text"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </label>
        <label className={s.label}>
          Количество
          <input
            required
            type="number"
            value={count}
            onChange={e => setCount(+e.currentTarget.value)}
          />
        </label>
        <label className={s.label}>
          Ширина
          <input
            required
            type="number"
            value={width}
            onChange={e => setWidth(+e.currentTarget.value)}
          />
        </label>
        <label className={s.label}>
          Высота
          <input
            required
            type="number"
            value={height}
            onChange={e => setHeight(+e.currentTarget.value)}
          />
        </label>
        <label className={s.label}>
          Вес
          <input
            required
            type="text"
            value={weight}
            onChange={e => setWeight(e.currentTarget.value)}
          />
        </label>

        <button type="submit">Создать</button>
        <button type="button" onClick={close}>
          Отменить
        </button>
      </form>
    </>
  )
}

export default Form
