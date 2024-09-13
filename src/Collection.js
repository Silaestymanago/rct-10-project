
export default function Collection({name,images}){
   
    return(
      <div className='collection'>
     <img className='collection_big' src={images[0]} alt = 'Item'/>
      <div className='collection_bottom'>
      <img className='collection_mini' src={images[1]} alt='item'/>
      <img className='collection_mini' src={images[2]} alt='item'/>
      <img className='collection_mini' src={images[3]} alt='item'/>
     </div>
    
     <h4>{name}</h4>
      </div>
    )
  }

  


  
  