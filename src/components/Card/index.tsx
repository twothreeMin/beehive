import React from 'react';
import {
  CardContainer, CardWrapper, CardLogo, CardCustomerName, CardTerm,
} from './style';

export const Card = () => (
  <CardContainer>
    <CardWrapper>
      <CardLogo src="https://cdn.econovill.com/news/photo/202012/510606_412941_2730.jpg" />
      <CardCustomerName>FnGuide</CardCustomerName>
      <CardTerm>2022.01.07 ~ 2022.02.14</CardTerm>
    </CardWrapper>
  </CardContainer>
);
