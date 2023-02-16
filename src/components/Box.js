import React from 'react'
import "../styles/box.css"
function Box({image, name, price, model}) {
  return (
    <div className='boxi'>
      <div className='forimage'> <img src={image} alt="" className='bximage'/></div>
       <div className='fortext'>
       <p className='bxname'>{name}</p>
        <p className='bxprice'>{price}</p>
        <p className='bxmodel'>{model}</p>
       </div>
        
    
       </div>
  )
}

export default Box