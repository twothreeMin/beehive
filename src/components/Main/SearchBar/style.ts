import styled from '@emotion/styled';
import tw from 'twin.macro';

export const SearchBarWrapper = styled.div`
  & {
    ${tw`hidden md:flex relative`}
  }

  & div{
    ${tw`inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400`}
  }

  & input{
    ${tw`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400`}
  }
`;
