import create from 'zustand';
import { ModalState, InputDetectState } from '../interface/stateInterface';

const modalStore = create<ModalState>((set) => ({
  isOpenModal: false,
  openModal: () => set(() => ({ isOpenModal: true })),
  closeModal: () => set(() => ({ isOpenModal: false })),
}));

const inputDetectStore = create<InputDetectState>((set) => ({
  isDetectInput: false,
  detectInput: () => set(() => ({
    isDetectInput: true,
  })),
  notDetectInput: () => set(() => ({
    isDetectInput: false,
  })),
}));

export { modalStore, inputDetectStore };
