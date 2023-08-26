import React from 'react'
import "./Modal.css"
import ModalContent from './MdalContent'
export default function Modal(props) {
  // const localStorage = localStorage.getItem("userEmail")
  return (
    <div className='modal'>
      <ModalContent closebutton1={props.closehandlerbutton}></ModalContent>
    </div>
  )
}
