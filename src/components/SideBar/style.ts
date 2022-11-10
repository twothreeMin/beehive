import styled from '@emotion/styled';
import tw from 'twin.macro';

export const SideBarWrpper = styled.aside`
  ${tw`w-64 md:shadow md:translate-x-0 bg-yellow-300`}
`;

export const SideBarHeader = styled.div`
  & {
    ${tw` flex items-center justify-center py-2`}
  }
  
  & div {
    ${tw`inline-flex`}
  }

  & img {
    ${tw`h-28 w-52`}
  }
`;

export const SideBarContent = styled.div`
  & {
    ${tw`px-4 py-6`}
  }  

  & ul{
    ${tw`flex flex-col`}
  }

  & li#menu-title {
    ${tw`font-medium text-lg text-yellow-700 px-4 my-2`}
  }

  & li button {
    ${tw`h-10 px-3 rounded-lg text-black w-full text-left`}
    ${tw`hover:bg-yellow-500 hover:text-yellow-800 hover:text-lg hover:font-semibold`}
  }

  & li button span {
    ${tw`ml-3`}
  }
`;
