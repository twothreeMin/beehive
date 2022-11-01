import create from 'zustand';
import { ModalState, InputDetectStore } from '../interface/interface';

const modalStore = create<ModalState>((set) => ({
  isOpenModal: false,
  openModal: () => set(() => ({ isOpenModal: true })),
  closeModal: () => set(() => ({ isOpenModal: false })),
}));

const inputDetectStore = create<InputDetectStore>((set) => ({
  isDetectCustomerField: false,
  isDetectConsultantField: false,
  detectCustomerField: () => set((state) => ({
    isDetectCustomerField: !state.isDetectCustomerField,
  })),
  detectConsultantField: () => set((state) => ({
    isDetectConsultantField: !state.isDetectConsultantField,
  })),
}));

export { modalStore, inputDetectStore };
