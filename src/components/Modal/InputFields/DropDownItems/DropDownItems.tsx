import React from 'react';
import { useCustomers, useConsultants } from '../../../../state/server/useGetData';
import {
  DropDownItemsWrapper, ItemsWrapper, Items, NullMessage,
} from './styled';
import userProfile from '../../../../assets/userProfile.png';
import { inputCstStore, inputCnstStore } from '../../../../state/client/store';
import { RequestData } from './proptype';

function DropDownCst() {
  const { inputCst, setInputCst } = inputCstStore();
  const csts = useCustomers(inputCst);

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
  const cnsts = useConsultants(inputCnst);

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

export const DropDownItems = React.memo(({ requestData }: RequestData) => (
  <DropDownItemsWrapper>
    {requestData === 'customer'
      ? <DropDownCst /> : <DropDownCnst />}
  </DropDownItemsWrapper>
));
