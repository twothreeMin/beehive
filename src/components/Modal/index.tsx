import ReactDOM from 'react-dom';
import { ModalWrapper, ModalFormWrapper } from './style';
import { InputForm } from './InputForm';
import closeButton from '../../assets/close.png';

interface ModalProps {
  openModal: boolean;
  clickCloseModal: () => void;
}

export function Modal({ openModal, clickCloseModal }: ModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        openModal
        && (
        <ModalWrapper>
          <button type="button" onClick={clickCloseModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
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
