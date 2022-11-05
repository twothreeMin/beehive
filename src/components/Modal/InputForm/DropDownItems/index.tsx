import { DropDownItemsWrapper, ItemsWrapper, Item } from './styled';

export function DropDownItems() {
  return (
    <DropDownItemsWrapper>
      <ItemsWrapper>
        <Item>
          <span id="name">이상민</span>
          <span id="position">전임 컨설턴트</span>
        </Item>
        <Item>
          <span id="name">이상민</span>
          <span id="position">전임 컨설턴트</span>
        </Item>
      </ItemsWrapper>
    </DropDownItemsWrapper>
  );
}
