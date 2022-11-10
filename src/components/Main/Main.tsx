import { modalStore } from '../../state/client/store';
import { Modal } from '../Modal/Modal';
import { Profile } from './Profile/Profile';
import { SearchBar } from './SearchBar/SearchBar';
import { MainHeaderContent, MainHeader } from './style';

// 버튼은 나중에 스케줄러 안으로 넣어야함
export function Main() {
  const { isOpenModal, openModal } = modalStore();

  return (
    <main className="w-full">
      <MainHeader>
        <MainHeaderContent>
          <SearchBar />
          <Profile />
        </MainHeaderContent>
      </MainHeader>
      {isOpenModal && <Modal />}
      <button type="button" onClick={openModal}>등록(모달창)</button>
    </main>
  );
}
