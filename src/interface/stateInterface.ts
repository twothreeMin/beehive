export interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface InputDetectState {
  isDetectInput: boolean;
  detectInputFiled: () => void;
  notDetectInputFiled: () => void;
}
