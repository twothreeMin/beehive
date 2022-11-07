export interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface InputCstState {
  inputCst: string;
  setInputCst: (word: string) => void;
}

export interface InputCnstState {
  inputCnst: string;
  setInputCnst: (word: string) => void;
}
