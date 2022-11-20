import { Main } from '../components/Main/Main';
import { SideBar } from '../components/SideBar/SideBar';
import { MainWrapper } from './style';

export function Consultants() {
  return (
    <MainWrapper>
      <SideBar />
      <Main pageName="Home" />
    </MainWrapper>
  );
}

// export function Consultants() {
//   const [consultants, setConsultants] = useState<Consultant[]>([]);

//   useEffect(() => {
//     async function getConsultants() {
//       const consultantsArr = await RequestManager.getConsultants();
//       setConsultants(consultantsArr);
//     }
//     getConsultants();
//   }, []);

//   return (
//     <div>
//       {consultants.map((consultant) => (
//         <div key={consultant.id}>
//           <Card data={consultant} />
//         </div>
//       ))}
//     </div>
//   );
// }
