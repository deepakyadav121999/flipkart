import React from 'react'
import flipkart from'../image/flipkart.jpg';
import plus from '../image/plus.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import Login from './Login';
import More from './More';
import 'tippy.js/themes/light.css'

function Header() {
  return (
    <div className='header1'>
        <div className="first1">
            <img src={flipkart} alt="logo" />
            <div className="first11">
               <span className='explore1'>Explore</span>
               <span className='plus1'>Plus</span>
               <span>
                <img src={plus} alt="plus_logo" />
               </span>
            </div>
        </div>
        <div className="second1">
            <input type="text"  placeholder='Search for products,brands and more'/>
             <SearchIcon/>
        </div>
        <div className="third1">
            <Tippy content={<Login/>}interactive={true}
            theme="light"><button><p className='pf'>Login</p></button></Tippy>
            
        </div>
         <div className="extra1">
            <span>Become a Seller</span>
         </div>
        <div className="fourth1">
            <Tippy content={<More/>} 
             theme="light"
            interactive={true}
            offset={[5,18]}><span>More</span>
            </Tippy>
          
            <ExpandMoreIcon/>
         
           
        </div>
        <div className="five1">
           
            <ShoppingCartIcon/>
            <p className='xx'>Cart</p>
        </div>
    </div>
  )
}

export default Header