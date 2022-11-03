export interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface InputDetectState {
  isDetectCustomerField: boolean;
  isDetectConsultantField: boolean;
  detectCustomerField: () => void;
  detectConsultantField: () => void;
}
