
import { useState } from 'react';
import './App.css'; 
import Button from './component/UI/Button/Button';
function App(){ 

  let [counter , setCounter] = useState(0);

  const inc = function(){
    setCounter(counter + 1)
    console.log('+')
  } 

  const dec = function(){
    setCounter(counter - 1)
    console.log('+')
  }
 return (  

    <div className='App'> 
     <h1> React app</h1>
        
        
          <Button text = '+' 
            onClick = { inc }
          > <i class="fa-solid fa-plus"></i> </Button> 
           <div className='counter'> {counter} </div>
          <Button text = '-'
          onClick = { dec }
          > </Button> 
        
        
    </div>
 )
 }


export default App;
