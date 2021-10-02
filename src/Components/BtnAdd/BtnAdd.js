import { useState } from 'react'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

function BtnAdd() {
  const [IsModalShown, setIsModalShown] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsModalShown(true)}>
        Добавить продукт
      </button>
      {IsModalShown && (
        <Modal>
          <Form close={() => setIsModalShown(false)} />
        </Modal>
      )}
    </>
  )
}

export default BtnAdd
