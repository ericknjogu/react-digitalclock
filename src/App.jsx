import UserProfile from './components/UserProfile'

export default function App() {
  const callMe=()=>{
    console.log("hello");
    
  };
  return (
  <div>
    <h1>Root Component</h1>
    <UserProfile
      username="Erick"
      age={20} 
      isLoggedIn={true}
      favouriteFoods={[
        {
          name: "Githeri",
          id: "githeri"
        },
        {
          name: "Pilau",
          id: "pilau"
        }
      ]}
      
      callMe={callMe} />
  </div>
  );
}