import { Consultant, Customer } from '../../interface/interface';
import {
  CardContainer, CardWrapper, CardLogo, CardCustomerName, CardTerm,
} from './style';

export function Card({ data }: { data: Consultant | Customer }): JSX.Element {
  if (data.id.includes('cnst')) {
    return (
      <CardContainer>
        <CardWrapper>
          <CardLogo src="https://cdn.econovill.com/news/photo/202012/510606_412941_2730.jpg" />
          <CardCustomerName>{data.id}</CardCustomerName>
        </CardWrapper>
      </CardContainer>
    );
  }

  if (data.id.includes('cst')) {
    return (
      <CardContainer>
        <CardWrapper>
          <CardLogo src="https://cdn.econovill.com/news/photo/202012/510606_412941_2730.jpg" />
          <CardCustomerName>{data.id}</CardCustomerName>
          <CardTerm />
        </CardWrapper>
      </CardContainer>
    );
  }

  return (
    <div>
      데이터를 불러오지 못하였거나, 잘못된 요청입니다.
    </div>
  );
}
