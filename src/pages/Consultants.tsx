import { useEffect, useState } from 'react';
import { Consultant } from '../state/server/type/type';
import { RequestManager } from '../state/server/lib/requestApi';
import { Card } from '../components/Card/Card';

export function Consultants() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);

  useEffect(() => {
    async function getConsultants() {
      const consultantsArr = await RequestManager.getConsultants();
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
