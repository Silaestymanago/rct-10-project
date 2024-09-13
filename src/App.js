import React, { useEffect, useState } from 'react'
import Collection from './Collection';

function App() {
  const [collections, setCollections]= useState([]);
  useEffect(()=>{
    fetch('https://66e30b33494df9a478e4161f.mockapi.io/collection')
    .then((res)=>res.json()).then(json =>{
      setCollections(json)
    })
    .catch(err=>{
      console.log(err)
      alert('Error')
    })
  },[])
  return (
    <div className="App">
     <h1>My collection of photos</h1>
     <div className='top'>
     <ul className='tags'>
     <li className='active'>Все</li>
     <li>Море</li>
     <li>Горы</li>
     <li>Архитектура</li>
     <li>Города</li>
     </ul>
     <input className='search-input' placeholder='Search by name'/>
     </div>
     <div className='content'>

     {collections.map((obj,index)=>(
      <Collection key={index}
      name={obj.name}
     images ={obj.photos}
     />
     ))}
  
     </div>
     <ul className='pagination'>
      <li>1</li>
      <li className='active'>2</li>
      <li>3</li>
     </ul>
    </div>
  );
}

export default App;
