import styled from '@emotion/styled';
import tw from 'twin.macro';

export const MainWrapper = styled.div`
  ${tw`flex flex-row min-h-screen bg-gray-100 text-gray-800`}
`;

export const MainHeader = styled.header`
  & {
    ${tw`bg-white shadow py-4 px-4`}
  }
`;

export const MainHeaderContent = styled.div`
  & {
    ${tw`flex items-center flex-row`}
  }
`;

export const MainContent = styled.div`
  & {
    ${tw`mt-7 w-full`}
  }
`;
