import { Main } from '../../components/Main/Main';
import { SideBar } from '../../components/SideBar/SideBar';
import { MainWrapper } from './style';

export function Home() {
  return (
    <MainWrapper>
      <SideBar />
      <Main />
    </MainWrapper>
  );
}
