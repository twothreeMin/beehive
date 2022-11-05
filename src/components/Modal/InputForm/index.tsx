import { modalStore, inputDetectStore } from '../../../store/store';
import { DropDownItems } from './DropDownItems';
import {
  FormWrapper, InputWrapper, ButtonWrapper, Button,
} from './style';

export function FormInputs() {
  const { closeModal } = modalStore();
  const { isDetectInput, detectInput, notDetectInput } = inputDetectStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) detectInput();
    if (e.target.value.length === 0) notDetectInput();
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <label htmlFor="customer">
          <p>고객사</p>
          <input type="customer" name="customer" id="customer" onChange={detectSearching} required />
          {isDetectInput && <DropDownItems />}
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
