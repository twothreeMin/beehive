import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ButtonTypeProps } from '../../state/client/type/styletype';

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

export const ButtonWrapper = styled.div`
  ${tw`flex flex-row`}
`;

export const Button = styled.button<ButtonTypeProps>`
  ${tw`m-2 w-full text-white
  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}

  ${({ isPrimary }) => (isPrimary ? tw`bg-blue-700 hover:bg-blue-800` : tw`bg-gray-700 hover:bg-gray-800`)}
`;

export const ModalWrapper = styled.div`
  & {
    ${tw`
      fixed inset-x-0 top-1/4 m-auto max-w-sm rounded-lg shadow bg-blue-50
    `}
  }

  & #closeButton {
    ${tw` absolute 
      top-3 right-2.5 text-gray-400 bg-transparent 
      rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
    `}
    
    ${tw`
      hover:bg-gray-200 
      hover:text-gray-900 
    `}
  }
  
  & img {
    ${tw`w-4 h-4`}
  }
`;

export const ModalFormWrapper = styled.div`
  & {
    ${tw`py-6 px-6`}
  }

  & h3 {
    ${tw`mb-4 text-xl font-medium text-gray-900`}
  } 

`;
