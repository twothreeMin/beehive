import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import {
  ModalWrapper, ModalFormWrapper, ButtonWrapper, Button,
} from './style';
import { modalStore } from '../../state/client/store';
import { InputFields } from './InputFields/InputFields';
import closeButton from '../../assets/close.png';

export function Modal() {
  const { closeModal } = modalStore();

  useEffect(() => {
    console.log('Modal 컴포넌트 실행');
    return () => {
      console.log('Modal 컴포넌트 종료');
    };
  }, []);

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
