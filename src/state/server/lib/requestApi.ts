import axios from 'axios';
import { BASEURL } from './requestUrl';
import { Consultant, Customer, Project } from '../type/type';

const axiosClient = axios.create({
  baseURL: BASEURL,
  headers: { 'Content-type': 'application/json' },
});

const getCustomers = async () => {
  const resp = await axiosClient.get('customer.json');
  const resultData: Customer[] = Object.keys(resp.data).map((key: string) => ({
    id: key,
    cmpAddr: resp.data[key].cmp_addr,
    cmpName: resp.data[key].cmp_name,
    mgrName: resp.data[key].mgr_name,
    mgrPhone: resp.data[key].mgr_phone,
    mgrPosition: resp.data[key].mgr_position,
    project: resp.data[key].project,
  }));
  return resultData;
};

const getConsultants = async () => {
  const resp = await axiosClient.get('consultants.json');
  const resultData: Consultant[] = Object.keys(resp.data).map((key: string) => ({
    id: key,
    name: resp.data[key].name,
    phone: resp.data[key].phone,
    position: resp.data[key].position,
  }));
  return resultData;
};

const getProject = async () => {
  const resp = await axiosClient.get('project.json');
  const resultData: Project[] = Object.keys(resp.data).map((key: string) => ({
    id: key,
    text: resp.data[key].text,
    start: resp.data[key].start,
    end: resp.data[key].end,
    resource: resp.data[key].resource,
    backColor: resp.data[key].backColor,
    barHidden: true,
  }));
  return resultData;
};

export const RequestManager = {
  getConsultants,
  getCustomers,
  getProject,
};
