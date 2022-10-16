import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type Consultant = {
  id : string,
  name : string,
  phone : string,
  position: string
}

export function Main() {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    async function getConsultants() {
      const response: AxiosResponse = await axios.get('https://beehive-dafc1-default-rtdb.asia-southeast1.firebasedatabase.app/consultants.json');

      const resultData: Consultant[] = Object.keys(response.data).map((key: string) => ({
        id: key,
        name: response.data[key].name,
        phone: response.data[key].phone,
        position: response.data[key].phone,
      }));
      console.log(resultData);
    }
    getConsultants();
  }, []);

  return (
    <div>
      <h2>메인 페이지입니다.</h2>
    </div>
  );
}
