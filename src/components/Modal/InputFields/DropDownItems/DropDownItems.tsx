import { useCustomer } from '../../../../hooks/useCustomers';
import { DropDownItemsWrapper, ItemsWrapper, Item } from './styled';

export function DropDownItems() {
  const customers = useCustomer();

  return (
    <DropDownItemsWrapper>
      <ItemsWrapper>
        {customers.map((cst) => (
          <Item key={cst.id}>
            <span id="name">{cst.cmpName}</span>
            <span id="position">{cst.mgrName}</span>
          </Item>
        ))}
      </ItemsWrapper>
    </DropDownItemsWrapper>
  );
}
