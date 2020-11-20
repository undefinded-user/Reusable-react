import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalProvider';
import ItemCard from './Components/ItemCard';
import Header from './Components/Header'
import Logo from './Components/Logo'


function App() {
  const { data } = useContext(GlobalContext);
  return (
    <div className="App">
        <Header>
          <Logo />
          <p>There</p>
        </Header>
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        <ItemCard data={data[0]} />
        
    </div>
  );
}

export default App;
