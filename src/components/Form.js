import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Form.css';
import '../css/index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const sendersFirstName = formData.get('user_firstname'); // Antagande att användarens namn är i ett enda fält
    const sendersLastName = formData.get('user_lastname');
  
    // Lägger till avsändarens namn i formuläret innan det skickas
    formData.set('from_firstname', sendersFirstName);
  
    emailjs.sendForm('service_00q7dkh', 'template_0tlyno8', form.current, {
      publicKey: '_IbBEugqmN2a9GGiZ',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <main>
      <div className='container text-light p-4' id='form-container'>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Förnamn*</Form.Label>
            <Form.Control required type="text" name="user_firstname" placeholder="Förnamn" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
            <Form.Label>Efternamn*</Form.Label>
            <Form.Control required type="text" name="user_lastname" placeholder="Efternamn" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Label>Mail*</Form.Label>
            <Form.Control required type="email" name="user_email" placeholder="Mail" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Meddelande</Form.Label>
            <Form.Control as="textarea" rows={7} name="message" placeholder="Skriv din text här.." />
          </Form.Group>
          <Button variant="dark" type="submit" value="Send" className="px-4 py-2">
            Skicka
          </Button>
        </Form>
      </div>
    </main>
  );
}