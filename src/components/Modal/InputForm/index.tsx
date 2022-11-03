import { modalStore } from '../../../store/store';
import {
  ModalForm, ModalInputWrapper, ModalButtonWrapper, Button,
} from './style';

export function InputForm() {
  const { closeModal } = modalStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <ModalForm>
      <ModalInputWrapper>
        <label htmlFor="customer">
          <p>고객사</p>
          <input type="customer" name="customer" id="customer" onChange={detectSearching} required />
        </label>
      </ModalInputWrapper>
      <ModalInputWrapper>
        <label htmlFor="consultants">
          <p>컨설턴트</p>
          <input type="consultants" name="consultants" id="consultants" onChange={detectSearching} required />
        </label>
      </ModalInputWrapper>
      <ModalButtonWrapper>
        <Button isPrimary>등록</Button>
        <Button onClick={closeModal}>취소</Button>
      </ModalButtonWrapper>
    </ModalForm>
  );
}
