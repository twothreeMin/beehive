import styled from '@emotion/styled';
import tw from 'twin.macro';

const CardContainer = styled.div`
  ${tw`max-w-sm bg-white rounded-lg border border-gray-200 shadow-md`}
`;

const CardWrapper = styled.div`
  ${tw`flex flex-col items-center px-8 py-8`}
`;

const CardLogo = styled.img`
  ${tw`p-3`}
`;

const CardCustomerName = styled.h5`
  ${tw`mb-1 text-xl font-medium text-gray-900`}
`;

const CardTerm = styled.span`
  ${tw`text-sm text-gray-500`}
`;

export {
  CardContainer, CardWrapper, CardLogo, CardCustomerName, CardTerm,
};
