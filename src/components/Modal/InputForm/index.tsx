import { modalStore } from '../../../store/store';
import { ModalButtonWrapper } from './style';

export function InputForm() {
  const { closeModal } = modalStore();

  const detectSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <form className="space-y-6" action="#">
      <div>
        <label htmlFor="customer" className="block mb-2 text-sm font-medium">
          고객사
          <input type="customer" name="customer" id="customer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={detectSearching} required />
        </label>
      </div>
      <div>
        <label htmlFor="consultants" className="block mb-2 text-sm font-medium">
          컨설턴트
          <input type="consultants" name="consultants" id="consultants" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" onChange={detectSearching} required />
        </label>
      </div>
      <ModalButtonWrapper>
        <button type="submit" className="m-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">등록</button>
        <button type="button" onClick={closeModal} className="m-2 w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">취소</button>
      </ModalButtonWrapper>
    </form>
  );
}
