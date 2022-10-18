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
  project: { // project: 프로젝트 정보
    end_date: string;
    name: string;
    ptst_target: number;
    start_date: string;
  };
}
