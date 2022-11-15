export interface Project {
  id: string;
  text: string;
  start: string;
  end: string;
  resource: string;
  backColor: string;
  barHidden: boolean;
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
