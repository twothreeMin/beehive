import { modalStore } from '../../store/store';
import { Modal } from '../Modal';

export function Main() {
  const { openModal } = modalStore();

  return (
    <div>
      <Modal />
      <h1>Main</h1>
      <button type="button" onClick={openModal}>등록(모달창)</button>
    </div>
  );
}
