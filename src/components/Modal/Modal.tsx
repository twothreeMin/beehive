import ReactDOM from 'react-dom';
import { useQuery } from 'react-query';
import { RequestManager } from '../../lib/requestApi';
import {
  ModalWrapper, ModalFormWrapper, ButtonWrapper, Button,
} from './style';
import { modalStore } from '../../store/store';
import { InputForms } from './InputForms/InputForms';
import closeButton from '../../assets/close.png';

export function Modal() {
  const { closeModal } = modalStore();

  // const { data } = useQuery(
  //   ['getCustomer'],
  //   async () => await RequestManager.getCustomersArray(),
  // );

  // console.log(data);

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
              <InputForms />
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
