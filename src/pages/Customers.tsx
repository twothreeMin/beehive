import { useEffect, useState } from 'react';
import { CnstCard } from '../components/Card/CnstCard/CnstCard';
import { CstCard } from '../components/Card/CstCard/CstCard';
import { Profile } from '../components/Main/Profile/Profile';
import { SearchBar } from '../components/Main/SearchBar/SearchBar';
import { SideBar } from '../components/SideBar/SideBar';
import { RequestManager } from '../state/server/lib/requestApi';
import { Customer } from '../state/server/type/type';
import { useGetCustomers } from '../state/server/useGetData';
import {
  MainContent, MainHeader, MainHeaderContent, MainWrapper,
} from './style';

export function Customers() {
  return (
    <MainWrapper>
      <SideBar />
      <main className="w-full">
        <MainHeader>
          <MainHeaderContent>
            <SearchBar />
            <Profile />
          </MainHeaderContent>
        </MainHeader>
        <MainContent>
          <CstCard />
        </MainContent>
      </main>
    </MainWrapper>
  );
}
