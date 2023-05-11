
import { useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table';

function App() {
  
  const [query, setQuery] = useState(" ");


   const propsUsers = ["first_name", "last_name", "email" ,"gender"];

  console.log(Users[0]["email"]);

   const search = (data) => {
        return data.filter((item) => 
          propsUsers.some((propsUser)=> item[propsUser].toLowerCase().includes(query))
  );
  } ;
  
  return (
    <div className='app'>
       <input 
            type='text' 
            placeholder='Search...' 
            className='search' 
            onChange={(event) => setQuery(event.target.value)}
       />
       <Table data={search(Users)}/>
    </div>
  )
}

export default App
