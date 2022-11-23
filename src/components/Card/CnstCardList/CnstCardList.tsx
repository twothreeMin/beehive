import { useGetConsultants } from '../../../state/server/useGetData';
import { CnstCard } from '../CnstCard/CnstCard';

export function CnstCardList() {
  const cnsts = useGetConsultants();

  return (
    <div className="flex flex-wrap flex-col md:flex-row ">
      {cnsts.map((cnst) => (
        <div key={cnst.id}>
          <CnstCard cnst={cnst} />
        </div>
      ))}
    </div>
  );
}

// {customers.map((customer) => (
//   <div key={customer.id}>
//     <Card data={customer} />
//   </div>
// ))}
