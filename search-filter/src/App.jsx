
import { useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table';

function App() {
  const [query, setQuery] = useState(" ");

  // console.log(Users.filter(user=> user.first_name.toLowerCase().includes("ka")));
  
  return (
    <div className='app'>
       <input 
            type='text' 
            placeholder='Search...' 
            className='search' 
            onChange={(event) => setQuery(event.target.value)}
       />
       <Table/>
    </div>
  )
}

export default App
