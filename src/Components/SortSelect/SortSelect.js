import { useDispatch } from 'react-redux'
import sortingAction from '../../Redux/sorting/sortingAction'

function SortSelect() {
  const dispatch = useDispatch()

  function changeSorting(e) {
    dispatch(sortingAction(e.currentTarget.value))
  }

  return (
    <div>
      <label>
        Сортировать по:
        <select onChange={changeSorting}>
          <option value="name">Имени</option>
          <option value="count">Кол-ву</option>
        </select>
      </label>
    </div>
  )
}

export default SortSelect
