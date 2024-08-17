import { UserDetails } from "./components/UserDetails";

export default function App() {

  const mockUsers =[
    {
      id: 1,
      username: 'erick',
      email: 'erick@cinex.com'
    },
    {
      id: 2,
      username: 'kamau',
      email: 'kamau@cinex.com'
    },
    {
      id: 3,
      username: 'kamau',
      email: 'kamau@cinex.com'
    },
    {
      id: 4,
      username: 'kamau',
      email: 'kamau@cinex.com'
    }
  ];
  

  return (
  <div>{mockUsers.map(
    (user)=>{
      return (
        <UserDetails key={user.id} user={user}/>
      )
    }
  )}</div>
  );
}