import React from 'react';
import './App.css'; 
import InfoBlock from './component/infoBlock/infoBlock';
function App() {  
   const name = 'Denis'
   const family = 'Andrushchenko'
   const age = '30'
   const skills = [' HTML ' , 'JS' , ' CSS ' , 'REACT ' ]
   const hobbie = ['hobbie1' , 'hobbie2' ,'hobbie3' ,'hobbie4' ,]
    
   const menuItems = [ 'Home' , 'About' , 'Blog']
  return (
      <div className='App'>  
      <ul className='menu'>  {menuItems.map(elem => <li key ={elem} className='menu_items'> {elem} </li>)} </ul> 
      <h1> { `${name}  ${family}`}</h1>
      <h2> Age {age} years </h2> 

      <InfoBlock title ='skills' data = {skills}/>
      <InfoBlock title ='hobbie' data = {hobbie} />
      
      </div>
  );
}      



export default App;
