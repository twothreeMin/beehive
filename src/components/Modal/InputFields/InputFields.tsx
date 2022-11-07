import React, { useCallback } from 'react';
import { inputCstStore, inputCnstStore } from '../../../store/store';
import { debounce } from '../utils';
import { DropDownItems } from './DropDownItems/DropDownItems';
import { InputWrapper } from './style';

const CstInputField = React.memo(() => {
  const { inputCst, setInputCst } = inputCstStore();

  const onChageInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(setInputCst(e.target.value), 500);
  }, [inputCst]);

  return (
    <InputWrapper>
      <label htmlFor="cusomter">
        <p>고객사</p>
        <input name="customer" id="customer" onChange={onChageInput} required />
        {inputCst ? <DropDownItems requestData="customer" /> : <div />}
      </label>
    </InputWrapper>
  );
});

const CnstInputField = React.memo(() => {
  const { inputCnst, setInputCnst } = inputCnstStore();

  const onChageInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(setInputCnst(e.target.value), 500);
  }, [inputCnst]);

  return (
    <InputWrapper>
      <label htmlFor="consultant">
        <p>컨설턴트</p>
        <input name="consultant" id="consultant" onChange={onChageInput} required />
        {inputCnst ? <DropDownItems requestData="consultants" /> : <div />}
      </label>
    </InputWrapper>
  );
});

export function InputFields() {
  return (
    <>
      <CstInputField />
      <CnstInputField />
    </>
  );
}
