import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ProfileWrapper = styled.div`
  & {
    ${tw`flex ml-auto`}
  }
`;

export const ProfileButton = styled.button`
  & {
    ${tw`flex flex-row items-center`}
  }

  & img {
    ${tw`h-10 w-10 bg-gray-200 border rounded-full`}
  }
`;

export const ProfileDescription = styled.span`
  &{
    ${tw`flex flex-col ml-2`}
  }
  
  & span#name {
    ${tw`truncate w-20 font-semibold tracking-wide leading-none`}
  }

  & span#position {
    ${tw`truncate w-20 text-gray-500 text-xs leading-none mt-1`}
  }
`;
