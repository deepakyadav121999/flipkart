import React from 'react'
import "../styles/box1.css"
function Box1({para1,para2}) {
  return (
    <div className='box1'>
        <div className='paras'> <p className='parac'>{para1}</p>
        <p className='parac'>{para2}</p></div>
        <div>
        <button className='para_btn'>View All</button>
        </div>
       
       
    </div>
  )
}

export default Box1