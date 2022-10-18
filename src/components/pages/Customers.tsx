import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Customer } from '../../interface/interface';
import { Card } from '../Card/index';

export function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function getCustomers() {
      const response: AxiosResponse = await axios.get('https://beehive-dafc1-default-rtdb.asia-southeast1.firebasedatabase.app/customer.json');

      const resultData: Customer[] = Object.keys(response.data).map((key: string) => ({
        id: key,
        cmpAddr: response.data[key].cmp_addr,
        cmpName: response.data[key].cmp_name,
        mgrName: response.data[key].mgr_name,
        mgrPhone: response.data[key].mgr_phone,
        mgrPosition: response.data[key].mgr_position,
        project: response.data[key].project,
      }));

      setCustomers(resultData);
    }
    getCustomers();
  }, []);

  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.id}>
          <Card data={customer} />
        </div>
      ))}
    </div>
  );
}
