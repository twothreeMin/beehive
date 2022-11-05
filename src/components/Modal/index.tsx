import ReactDOM from 'react-dom';
import { ModalWrapper, ModalFormWrapper } from './style';
import { modalStore } from '../../store/store';
import { FormInputs } from './InputForm';
import closeButton from '../../assets/close.png';

export function Modal() {
  const { isOpenModal, closeModal } = modalStore();

  return (
    <>
      {ReactDOM.createPortal(
        isOpenModal
        && (
        <ModalWrapper>
          <button type="button" id="closeButton" onClick={closeModal}>
            <img src={closeButton} alt="closeButton" />
          </button>
          <ModalFormWrapper>
            <h3>프로젝트 일정 등록</h3>
            <FormInputs />
          </ModalFormWrapper>
        </ModalWrapper>
        ),
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
