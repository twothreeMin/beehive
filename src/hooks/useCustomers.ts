import { useQuery } from 'react-query';
import { Customer } from '../interface/interface';
import { RequestManager } from '../lib/requestApi';
import { queryKeys } from './constants';

export function useCustomer(): Customer[] {
  const { data = [] } = useQuery(queryKeys.customers, RequestManager.getCustomers);
  return data;
}
