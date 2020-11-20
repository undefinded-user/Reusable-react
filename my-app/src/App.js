import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalProvider';
import ItemCard from './Components/ItemCard';


function App() {
  const { data } = useContext(GlobalContext);
  return (
    <div className="App">
      
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        
    </div>
  );
}

export default App;
