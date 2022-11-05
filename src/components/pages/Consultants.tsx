import { useEffect, useState } from 'react';
import { Consultant } from '../../interface/interface';
import { RequestManager } from '../../lib/requestApi';
import { Card } from '../Card/Card';

export function Consultants() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  useEffect(() => {
    async function getConsultants() {
      const consultantsArr = await RequestManager.getConsultantsArray();
      setConsultants(consultantsArr);
    }
    getConsultants();
  }, []);

  return (
    <div>
      {consultants.map((consultant) => (
        <div key={consultant.id}>
          <Card data={consultant} />
        </div>
      ))}
    </div>
  );
}
