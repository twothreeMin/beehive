import { useQuery } from 'react-query';
import { RequestManager } from '../lib/requestApi';
import { queryKeys } from './constants';

export function useCustomers(word = '') {
  const { data = [] } = useQuery(queryKeys.customers, RequestManager.getCustomers, {
    select: (cst) => cst.filter((c) => c.cmpName.includes(word)),
  });
  return data;
}

export function useConsultants(word = '') {
  const { data = [] } = useQuery(queryKeys.consultants, RequestManager.getConsultants, {
    select: (cnst) => cnst.filter((c) => c.name.includes(word)),
  });
  return data;
}
