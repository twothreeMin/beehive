import styled from '@emotion/styled';
import tw from 'twin.macro';

export const CardWrapper = styled.div`
  & {
    ${tw`max-w-xs bg-white border border-gray-200 rounded-lg shadow-md my-3 mx-10 bg-yellow-50 border-yellow-50`}
  }
`;

export const CardContent = styled.div`
  & {
    ${tw`flex flex-col items-center mx-3 py-5`}
  }
`;

export const ButtonWrapper = styled.div`
  & {
    ${tw`flex mt-4 space-x-3 mx-6 my-3`}
  }

  & .primary {
    ${tw`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
  }

  & .secondary {
    ${tw`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-gray-300 border border-gray-300 rounded-lg hover:bg-gray-400`}
  }

`;
