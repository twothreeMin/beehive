import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const CardContainer = tw.div`
  max-w-sm
  bg-white
  rounded-lg
  border
  border-gray-200
  shadow-md
`;

const CardWrapper = tw.div`
  flex
  flex-col
  items-center
  px-8
  py-8
`;

const CardLogo = styled.img`
  ${tw`p-3`}
`;

const CardCustomerName = tw.h5`
  mb-1
  text-xl
  font-medium
  text-gray-900
`;

const CardTerm = tw.span`
  text-sm
  text-gray-500
`;

export {
  CardContainer, CardWrapper, CardLogo, CardCustomerName, CardTerm,
};
