import { CnstCardList } from '../components/Card/CnstCardList/CnstCardList';
import { Profile } from '../components/Main/Profile/Profile';
import { SearchBar } from '../components/Main/SearchBar/SearchBar';
import { SideBar } from '../components/SideBar/SideBar';
import {
  MainContent, MainHeader, MainHeaderContent, MainWrapper,
} from './style';

export function Consultants() {
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
          <CnstCardList />
        </MainContent>
      </main>
    </MainWrapper>
  );
}
