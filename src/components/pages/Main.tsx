import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Consultant } from '../../interface/interface';
import { Card } from '../Card/index';

export function Main() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  useEffect(() => {
    async function getConsultants() {
      const response: AxiosResponse = await axios.get('https://beehive-dafc1-default-rtdb.asia-southeast1.firebasedatabase.app/consultants.json');

      const resultData: Consultant[] = Object.keys(response.data).map((key: string) => ({
        id: key,
        name: response.data[key].name,
        phone: response.data[key].phone,
        position: response.data[key].phone,
      }));

      setConsultants(resultData);
    }
    getConsultants();
  }, []);

  return (
    <div>
      {consultants.map((consultant) => (
        <div key={consultant.id}>
          <Card consultant={consultant} />
        </div>
      ))}
    </div>
  );
}
