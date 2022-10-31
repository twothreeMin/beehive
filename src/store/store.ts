import create from 'zustand';

interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  isOpenModal: false,
  openModal: () => set((state) => ({ isOpenModal: true })),
  closeModal: () => set((state) => ({ isOpenModal: false })),
}));

export { modalStore };
