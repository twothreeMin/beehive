import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalWrapper, ModalFormWrapper } from './style';
import { modalStore } from '../../store/store';
import { InputForm } from './InputForm';
import closeButton from '../../assets/close.png';
import { RequestManager } from '../../lib/requestApi';

export function Modal() {
  const { isOpenModal, closeModal } = modalStore();

  return (
    <>
      {ReactDOM.createPortal(
        isOpenModal
        && (
        <ModalWrapper>
          <button type="button" id="closeButton" onClick={closeModal}>
            <img src={closeButton} alt="closeButton" className="w-4 h-4" />
          </button>
          <ModalFormWrapper>
            <h3 className="mb-4 text-xl font-medium text-gray-900">프로젝트 일정 등록</h3>
            <InputForm />
          </ModalFormWrapper>
        </ModalWrapper>
        ),
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
