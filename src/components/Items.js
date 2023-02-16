import React from 'react'
import '../styles/items.css';
import mobile from '../image/mobile.jpg'
import fasion from '../image/fasion.jpg'
import electronics from '../image/electronics.jpg'
import home from '../image/home.jpg'
import apliance from '../image/apliance.jpg'
import traval from '../image/traval.jpg'
import offers from '../image/offers.jpg'
import toys from '../image/toys.jpg'
import grocery  from '../image/grocery.jpg'
import bike  from '../image/bike.jpg'
function Items() {
  return (
    <div className='item1'>
        <div><img src={grocery} alt=""  className='img11'/>
        <p className='tx'>Grocery</p>
        </div>
        <div><img src={mobile} alt="" className='img11'/>
    
        <p className='tx'>Mobile</p>
        </div>
        <div><img src={fasion} alt="" className='img11' />
        <p className='tx'>Fashion</p>
        </div>
        <div><img src={electronics} alt="" className='img11'/>
        <p className='tx'>Electronics</p>
        </div>
        <div><img src={home} alt="" className='img11'/>
       
        <p className='tx'>Home</p>
        </div>
        <div><img src={apliance} alt="" className='img11'/>
      
        <p className='tx'>Apliance</p>
        </div>
        <div><img src={traval} alt="" className='img11'/>
        
        <p className='tx'>Traval</p>
        </div>
        <div><img src={offers} alt="" className='img11'/>
        <p className='tx'>Top Offers</p></div>
        <div><img src={toys} alt="" className='img11 btd'/>
      
        <p className='tx'>Beauty,Toys & More</p>
        </div>
        <div><img src={bike} alt="" className='img11'/>
        <p className='tx'>Two Wheelers</p>
        </div>
       
    </div>
  
  )
}

export default Items