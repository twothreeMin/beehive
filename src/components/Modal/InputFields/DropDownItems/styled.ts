import styled from '@emotion/styled';
import tw from 'twin.macro';

export const DropDownItemsWrapper = styled.div`
 ${tw`relative`}
`;

export const ItemsWrapper = styled.div`
  ${tw`absolute bg-gray-50 w-full rounded-lg z-10 bg-white rounded shadow`}
`;

export const Items = styled.ul`
  & {
    ${tw`overflow-y-auto py-1 h-48 text-gray-700`}
  }

  & button {
    ${tw`flex items-center py-2 px-4 w-full
    hover:bg-gray-100`}
  }

  & img {
    ${tw`mr-2 w-6 h-6 rounded-full`}
  }
`;

export const NullMessage = styled.div`
  &{
    ${tw`text-gray-700 text-sm`}
  }
`;
