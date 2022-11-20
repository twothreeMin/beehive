import { Main } from '../components/Main/Main';
import { SideBar } from '../components/SideBar/SideBar';
import { MainWrapper } from './style';

export function Customers() {
  return (
    <MainWrapper>
      <SideBar />
      <Main pageName="Customer" />
    </MainWrapper>
  );
}

// export function Customers() {
//   const [customers, setCustomers] = useState<Customer[]>([]);

//   useEffect(() => {
//     async function getCustomers() {
//       const customersArr = await RequestManager.getCustomers();
//       setCustomers(customersArr);
//     }
//     getCustomers();
//   }, []);

//   return (
//     <div>
//       {customers.map((customer) => (
//         <div key={customer.id}>
//           <Card data={customer} />
//         </div>
//       ))}
//     </div>
//   );
// }
