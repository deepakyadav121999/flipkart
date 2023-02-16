import React from 'react'
import Box from './Box'
import Box1 from './Box1'
import '../styles/beauty.css'
function Beauty() {
  return (
    <div className="beauty">
      <div className='beauty_list'>
        <div>
        <Box1 para1="Beauty, Food" para2 ="Toys & more"/>
        </div>
       <div>
        <Box image={"https://rukminim1.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70"}
        name="Tyres"
        price={"From 799"}
        model ={"Apollo,Bridgestone,Ceat and"}/>
       </div>
       <div>
        <Box image={"https://rukminim1.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70"}
        name="Rider Helmets"
       price={"From 699"}
      model="Vega,Steelbird,HRX and More"
         />
       </div>
       <div>
        <Box
    image={"https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70"}
    name="Top Selling Stationery"
    price={"From 49"}
    model ="Pens,Notebooks & more"
        />
       </div>
       <div>
        <Box
        image={"https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70"}
        name="Soft Toys"
        price={"Upto 70% Off"}
        model="Stuffed Toys,Plush Toys"
        />
       </div>
       <div>
        <Box
   image={"https://rukminim1.flixcart.com/image/200/200/kdt50nk0/microphone-accessory/g/m/g/sro-collar-mic-3-5mm-clip-on-mini-lapel-lavalier-microphone-for-original-imafun2rpyhtzhyk.jpeg?q=70"}
   name="Microphones"
   price={"Up to 70% off"}
   model="Explore Now"
        />
       </div>
        </div>
        </div>
  )
}

export default Beauty
