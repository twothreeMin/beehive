import { modalStore } from '../../store/store';
import { Modal } from '../Modal/Modal';

export function Main() {
  // openModal 상태는 SideMenu 생기면 따로 MainPage 컴포넌트 만들어서 빠질 예정
  const { openModal } = modalStore();

  return (
    <div>
      <Modal />
      <h1>Main</h1>
      <button type="button" onClick={openModal}>등록(모달창)</button>
    </div>
  );
}
