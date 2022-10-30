import { useState, useCallback } from 'react';
import { Modal } from '../Modal';

export function Main() {
  const [openModal, setOpenModal] = useState(false);

  const clickModalButton = useCallback(() => {
    setOpenModal(true);
  }, []);

  const clickCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div>
      <Modal openModal={openModal} clickCloseModal={clickCloseModal} />
      <h1>Main</h1>
      <button type="button" onClick={clickModalButton}>등록(모달창)</button>
    </div>
  );
}
