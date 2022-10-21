import axios from 'axios';
import { BASEURL } from './requestUrl';
import { Consultant, Customer } from '../interface/interface';

const axiosClient = axios.create({
  baseURL: BASEURL,
  headers: { 'Content-type': 'application/json' },
});

const getConsultantsArray = async () => {
  const resp = await axiosClient.get('consultants.json');
  const resultData: Consultant[] = Object.keys(resp.data).map((key: string) => ({
    id: key,
    name: resp.data[key].name,
    phone: resp.data[key].phone,
    position: resp.data[key].position,
  }));
  return resultData;
};

const getCustomersArray = async () => {
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

export const RequestManager = {
  getConsultantsArray,
  getCustomersArray,
};
