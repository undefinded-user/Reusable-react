import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalProvider';
import ItemCard from './Components/ItemCard';
import Header from './Components/Header'
import Logo from './Components/Logo'
import NavBar from './Components/Navbar'
import NavItem from './Components/Navbar/NavItem/'
import Subheader from './Components/Subheader'
import ProductPage from './Components/ProductPage'



function App() {
  const { data } = useContext(GlobalContext);
  return (
    <div className="App">
        <Header>
          <Logo />
          <NavBar>
            <NavItem reference='#'>
              Home
            </NavItem>
            <NavItem reference='#'>
              About
            </NavItem>
            <NavItem reference='#'>
              Contact
            </NavItem>
          </NavBar>
        </Header>
        <Subheader />
        <ProductPage>
          {data.map((item)=> <ItemCard data={item} />)}
        </ProductPage>        
    </div>
  );
}

export default App;
