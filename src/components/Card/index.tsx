import { Consultant } from '../../interface/interface';
import {
  CardContainer, CardWrapper, CardLogo, CardCustomerName, CardTerm,
} from './style';

export function Card({ consultant }: { consultant: Consultant }): JSX.Element {
  return (
    <CardContainer>
      <CardWrapper>
        <CardLogo src="https://cdn.econovill.com/news/photo/202012/510606_412941_2730.jpg" />
        <CardCustomerName>{consultant.name}</CardCustomerName>
        <CardTerm>{consultant.phone}</CardTerm>
      </CardWrapper>
    </CardContainer>
  );
}
