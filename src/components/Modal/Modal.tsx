import ReactDOM from 'react-dom';
import {
  ModalWrapper, ModalFormWrapper, ButtonWrapper, Button,
} from './style';
import { modalStore } from '../../store/store';
import { InputFields } from './InputFields/InputFields';
import closeButton from '../../assets/close.png';

export function Modal() {
  const { closeModal } = modalStore();

  return (
    <>
      {ReactDOM.createPortal(
        (
          <ModalWrapper>
            <button type="button" id="closeButton" onClick={closeModal}>
              <img src={closeButton} alt="closeButton" />
            </button>
            <ModalFormWrapper>
              <h3>프로젝트 일정 등록</h3>
              <InputFields />
              <ButtonWrapper>
                <Button isPrimary>등록</Button>
                <Button onClick={closeModal}>취소</Button>
              </ButtonWrapper>
            </ModalFormWrapper>
          </ModalWrapper>
        ),
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
