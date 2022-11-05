import { inputDetectCstStore, inputDetectCnstStore } from '../../../store/store';
import { DropDownItems } from './DropDownItems/DropDownItems';
import {
  InputWrapper,
} from './style';

function CstInputField() {
  const { isDetectCst, detectInputCst, notDetectInputCst } = inputDetectCstStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) detectInputCst();
    if (e.target.value.length === 0) notDetectInputCst();
  };

  return (
    <InputWrapper>
      <label htmlFor="cusomter">
        <p>고객사</p>
        <input name="customer" id="customer" onChange={detectSearching} required />
        {isDetectCst && <DropDownItems />}
      </label>
    </InputWrapper>
  );
}

function CnstInputField() {
  const { isDetectCnst, detectInputCnst, notDetectInputCnst } = inputDetectCnstStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) detectInputCnst();
    if (e.target.value.length === 0) notDetectInputCnst();
  };

  return (
    <InputWrapper>
      <label htmlFor="cusomter">
        <p>고객사</p>
        <input name="customer" id="customer" onChange={detectSearching} required />
        {isDetectCnst && <DropDownItems />}
      </label>
    </InputWrapper>
  );
}

export function InputForms() {
  return (
    <>
      <CstInputField />
      <CnstInputField />
    </>
  );
}
