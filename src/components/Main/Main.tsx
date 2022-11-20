import { modalStore } from '../../state/client/store';
import { Modal } from '../Modal/Modal';
import { Profile } from './Profile/Profile';
import { Scheduler } from './Scheduler/Scheduler';
import { SearchBar } from './SearchBar/SearchBar';
import { MainHeaderContent, MainHeader, MainContent } from './style';

// 메인은 콘텐츠 자리이며 customer, consultant, mainhome에 따라 안의 내용이 달라질것.
function MainHome() {
  const { isOpenModal, openModal } = modalStore();

  return (
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
  );
}

export function Main({ pageName }: {pageName: string}) {
  return <MainHome />;
}
