export interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface InputDetectCstStore {
  isDetectCst: boolean;
  detectInputCst: () => void;
  notDetectInputCst: () => void;
}

export interface InputDetectCnstStore {
  isDetectCnst: boolean;
  detectInputCnst: () => void;
  notDetectInputCnst: () => void;
}
