import { useState } from 'react';
import { Modal } from '../Modal';

export function Main() {
  // const [modal, setModal] = useState(false);

  function openModal() {
    console.log('click!');
  }

  return (
    <div>
      <Modal />
      <h1>Main</h1>
      <button type="button" onClick={openModal}>등록(모달창)</button>
    </div>
  );
}
