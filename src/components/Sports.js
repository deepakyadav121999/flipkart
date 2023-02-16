import React from 'react'
 import "../styles/sports.css"
 import Box from './Box'
 import Box1 from './Box1'
function Sports() {
  return (
     <div className="sports">
        <div className="sport_list">
             <div><Box1 para1="Sports," para2="HealthCare & more"/></div>
             <div><Box
             image="https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70"
             name="Tricycles & Rideons"
             price="Up to 70% Off"
             model="Figurines, Battle Toys & more"
             /></div>
             <div><Box
               image="https://rukminim1.flixcart.com/image/200/200/kjuby4w0/deodorant/v/c/d/400-one8-intense-fresh-deo-pack-of-2-200ml-x-2-2-perfume-body-original-imafzbn4nv2zhccp.jpeg?q=70"
               name="Deodrants and Perfumes"
               price="Upto 60% Off"
               model="Denver,Fogg & more"/></div>
             <div><Box
               image="https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70"
               name="String Instruments"
               price="Up to 70% Off"
               model="Guitars,Ukuleles & More"/></div>
             <div><Box
               image="https://rukminim1.flixcart.com/image/200/200/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70"
               name="Car pressure washer"
               price="Upto 65% Off"
               model="Bosch,Black & Decker & More"/></div>
             <div><Box
               image="https://rukminim1.flixcart.com/image/200/200/light/h/9/h/imported-bicycle-rear-light-5-led-usb-rechargeable-waterproof-original-imaeq7hj3gppgcxz.jpeg?q=70"
               name="Cycles Accesiories"
               price="From 125"
               model="Best Deals"/></div>
        </div>
     </div>
  )
}

export default Sports