import React from 'react';
import { useGetCustomers, useGetConsultants } from '../../../../state/server/useGetData';
import {
  DropDownItemsWrapper, ItemsWrapper, Items, NullMessage,
} from './style';
import userProfile from '../../../../assets/userProfile.png';
import { inputCstStore, inputCnstStore } from '../../../../state/client/store';

function DropDownCst() {
  const { inputCst, setInputCst } = inputCstStore();
  const csts = useGetCustomers(inputCst);

  function clickCstItem() {
    setInputCst('');
  }

  return (
    <ItemsWrapper>
      {csts.length !== 0 ? (
        <Items>
          {csts.map((cst) => (
            <li key={cst.id}>
              <button type="button" onClick={clickCstItem}>
                <img src={userProfile} alt="profile" />
                {cst.cmpName}
              </button>
            </li>
          ))}
        </Items>
      ) : <NullMessage>검색 결과가 존재하지 않습니다.</NullMessage>}
    </ItemsWrapper>
  );
}

function DropDownCnst() {
  const { inputCnst, setInputCnst } = inputCnstStore();
  const cnsts = useGetConsultants(inputCnst);

  function clickCnstItem() {
    setInputCnst('');
  }

  return (
    <ItemsWrapper>
      {cnsts.length !== 0 ? (
        <Items>
          {cnsts.map((cnst) => (
            <li key={cnst.id}>
              <button type="button" onClick={clickCnstItem}>
                <img src={userProfile} alt="profile" />
                {cnst.name}
              </button>
            </li>
          ))}
        </Items>
      ) : <NullMessage>검색 결과가 존재하지 않습니다.</NullMessage>}
    </ItemsWrapper>
  );
}

export const DropDownItems = React.memo(({ requestData }:
  {requestData : string}) => (
    <DropDownItemsWrapper>
      {requestData === 'customer'
        ? <DropDownCst /> : <DropDownCnst />}
    </DropDownItemsWrapper>
));
