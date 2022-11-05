import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ButtonTypeProps } from '../../../interface/styledInterface';

const FormWrapper = styled.form`
  ${tw`space-y-6`}
`;

const InputWrapper = styled.div`
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

const ButtonWrapper = styled.div`
  ${tw`flex flex-row`}
`;

const Button = styled.button<ButtonTypeProps>`
  ${tw`m-2 w-full text-white
  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}

  ${({ isPrimary }) => (isPrimary ? tw`bg-blue-700 hover:bg-blue-800` : tw`bg-gray-700 hover:bg-gray-800`)}
`;

export {
  FormWrapper, InputWrapper, ButtonWrapper, Button,
};
