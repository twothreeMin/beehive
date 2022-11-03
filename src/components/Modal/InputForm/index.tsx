import { modalStore } from '../../../store/store';
import {
  FormWrapper, InputWrapper, ButtonWrapper, Button,
} from './style';

export function FormInputs() {
  const { closeModal } = modalStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <label htmlFor="customer">
          <p>고객사</p>
          <input type="customer" name="customer" id="customer" onChange={detectSearching} required />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="consultants">
          <p>컨설턴트</p>
          <input type="consultants" name="consultants" id="consultants" onChange={detectSearching} required />
        </label>
      </InputWrapper>
      <ButtonWrapper>
        <Button isPrimary>등록</Button>
        <Button onClick={closeModal}>취소</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
}
