import tw from 'tailwind-styled-components';

const ModalWrapper = tw.div`
  fixed
  inset-x-0
  top-1/4
  m-auto
  max-w-sm
  bg-white
  rounded-lg
  shadow
  bg-blue-50
`;

const ModalFormWrapper = tw.div`
  py-6
  px-6
  lg:px-8
`;

const ModalButtonWrapper = tw.div`
  flex flex-row
`;

export { ModalWrapper, ModalFormWrapper };
