export interface Project {
  end_date: string;
  name: string;
  ptst_target: number;
  start_date: string;
}

export interface Consultant {
  id : string;
  name : string;
  phone : string;
  position: string;
}

export interface Customer {
  // cmp: 회사, mgr: 담당자
  id: string;
  cmpAddr: string;
  cmpName: string;
  mgrName: string;
  mgrPhone: string;
  mgrPosition: string;
  project: Project;
}

export interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface InputDetectStore {
  isDetectCustomerField: boolean;
  isDetectConsultantField: boolean;
  detectCustomerField: () => void;
  detectConsultantField: () => void;
}
