import styled from '@emotion/styled';
import tw from 'twin.macro';

export const DropDownItemsWrapper = styled.div`
 ${tw`relative`}
`;

export const ItemsWrapper = styled.div`
  ${tw`absolute bg-gray-50 w-full rounded-lg`}
`;

export const Item = styled.div`
  & {
    ${tw`py-2 px-3 flex space-x-44 place-content-center`}
    ${tw`hover:bg-gray-100`}
    ${tw`active:bg-gray-200`}
  }

  & #name {
    ${tw`rounded-full bg-yellow-300 text-sm text-gray-50 p-1`}
  }

  & #position {
    ${tw`p-1 text-sm text-gray-400`}
  }
`;
