import styled from '@emotion/styled';
import tw from 'twin.macro';

export const InputWrapper = styled.div`
  & label {
    ${tw`block my-8 text-lg font-medium`}
  }

  & p {
    ${tw`mb-2`}
  }

  & input {
    ${tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
  }
`;
