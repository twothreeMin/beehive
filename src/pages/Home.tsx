import { Profile } from '../components/Main/Profile/Profile';
import { Scheduler } from '../components/Main/Scheduler/Scheduler';
import { SearchBar } from '../components/Main/SearchBar/SearchBar';
import { Modal } from '../components/Modal/Modal';
import { SideBar } from '../components/SideBar/SideBar';
import { modalStore } from '../state/client/store';
import {
  MainContent, MainHeader, MainHeaderContent, MainWrapper,
} from './style';

export function Home() {
  const { isOpenModal, openModal } = modalStore();

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
          <Scheduler />
        </MainContent>
        {isOpenModal && <Modal />}
        <button type="button" onClick={openModal}>등록(모달창)</button>
      </main>
    </MainWrapper>
  );
}
