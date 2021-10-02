import { createPortal } from 'react-dom'

import s from './Modal.module.css'

const modalWindow = document.querySelector('#modalWindow')

export default function Modal({ children }) {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalWindow,
  )
}
