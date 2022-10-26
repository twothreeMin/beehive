import { Modal } from '../Modal';

export function Main() {
  function openModal() {
    console.log('click!');
  }

  return (
    <div>
      <h1>Main</h1>
      <button type="button" onClick={openModal}>등록(모달창)</button>
      <Modal />
    </div>
  );
}
