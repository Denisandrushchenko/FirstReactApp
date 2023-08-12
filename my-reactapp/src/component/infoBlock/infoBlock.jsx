const InfoBlock = (props) => { 
   
      return(
        <div className='info_block'> 
        <ul className='skills'> {props.data.map( elem => <li key={elem} className='skills_items'> {elem} </li>)} </ul> 
        
          </div>    
      ) 

     
  }  

  export default InfoBlock;