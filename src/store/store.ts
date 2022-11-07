import create from 'zustand';
import {
  ModalState, InputCstState, InputCnstState,
} from '../interface/stateInterface';

const modalStore = create<ModalState>((set) => ({
  isOpenModal: false,
  openModal: () => set(() => ({ isOpenModal: true })),
  closeModal: () => set(() => ({ isOpenModal: false })),
}));

const inputCstStore = create<InputCstState>((set) => ({
  inputCst: '',
  setInputCst: (word) => set(() => ({ inputCst: word })),
}));

const inputCnstStore = create<InputCnstState>((set) => ({
  inputCnst: '',
  setInputCnst: (word) => set(() => ({ inputCnst: word })),
}));

export {
  modalStore, inputCstStore, inputCnstStore,
};
