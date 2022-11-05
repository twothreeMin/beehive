import styled from '@emotion/styled';
import tw from 'twin.macro';

const ModalWrapper = styled.div`
  & {
    ${tw`
      fixed inset-x-0 top-1/4 m-auto max-w-sm rounded-lg shadow bg-blue-50
    `}
  }

  & #closeButton {
    ${tw` absolute 
      top-3 right-2.5 text-gray-400 bg-transparent 
      rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
      hover:bg-gray-200 
      hover:text-gray-900 
    `}
  }
  
  & img {
    ${tw`w-4 h-4`}
  }
`;

const ModalFormWrapper = styled.div`
  & {
    ${tw`py-6 px-6 lg:px-8`}
  }

  & h3 {
    ${tw`mb-4 text-xl font-medium text-gray-900`}
  } 

`;

export { ModalWrapper, ModalFormWrapper };
