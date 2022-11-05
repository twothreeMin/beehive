import create from 'zustand';
import { ModalState, InputDetectCstStore, InputDetectCnstStore } from '../interface/stateInterface';

const modalStore = create<ModalState>((set) => ({
  isOpenModal: false,
  openModal: () => set(() => ({ isOpenModal: true })),
  closeModal: () => set(() => ({ isOpenModal: false })),
}));

const inputDetectCstStore = create<InputDetectCstStore>((set) => ({
  isDetectCst: false,
  detectInputCst: () => set(() => ({
    isDetectCst: true,
  })),
  notDetectInputCst: () => set(() => ({
    isDetectCst: false,
  })),
}));

const inputDetectCnstStore = create<InputDetectCnstStore>((set) => ({
  isDetectCnst: false,
  detectInputCnst: () => set(() => ({
    isDetectCnst: true,
  })),
  notDetectInputCnst: () => set(() => ({
    isDetectCnst: false,
  })),
}));

export { modalStore, inputDetectCstStore, inputDetectCnstStore };
