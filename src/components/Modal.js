import React, { useState } from 'react'
import '../css/ModalStyle.css';
import { Form } from 'react-bootstrap';


const Modal = () => {
const [open, setOpen] = useState(false);
const openModal = (event) => {
    const textCombination = event.target.value;
    if (textCombination === '1337') {
      setOpen(true);
    }
  };
const closeModal = () =>{
    setOpen(false)
} 
return (
    <div>
      <Form.Group>
        <Form.Label>Förnamn*</Form.Label>
        <Form.Control required type='text' name='user_firstname' placeholder='Förnamn' onChange={openModal}id='form-text'/>

      </Form.Group>
      {open && (
        <div className='modal'>
          <div className='overlay'>
            <div className='modal-content'>
              <p className='text-dark'>Du är elite!</p>
              <button onClick={closeModal}>Stäng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal
