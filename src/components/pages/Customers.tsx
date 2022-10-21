import { useEffect, useState } from 'react';
import { Customer } from '../../interface/interface';
import { RequestManager } from '../../lib/requestApi';
import { Card } from '../Card/index';

export function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function getCustomers() {
      const customersArr = await RequestManager.getCustomersArray();
      setCustomers(customersArr);
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
