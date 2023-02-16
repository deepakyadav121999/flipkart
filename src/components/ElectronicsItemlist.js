import React from 'react'
import Box from "./Box";
import "../styles/item_list.css"
import Box1 from './Box1';
function Itemlist() {
  return (
    <div className="item_list">
         <div> <Box1 para1="Best of" para2="Electronics"/></div>
         <div> <Box image="https://rukminim1.flixcart.com/image/200/200/l12h1u80/cases-covers/back-cover/v/7/9/sgf235g-pat367-my-thing-original-imagcprak4yhdbh5.jpeg?q=70"
           name="Desinger cases and cover"
           price="Just 169"
           model="For Top Models"
         />
          
         </div>
         <div> <Box image="https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"
           name="Projecters"
           price="From 9999"
           model="ZEBRONICS"
         /></div>
         <div> <Box image="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70"
           name="Monitors"
           price="From 9999"
           model="SAMSUNG"
         /></div>
         <div> <Box image="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70"
           name="BenQ Monitors"
           price="From 9990"
           model="Top Rated"
         /></div>
         <div> <Box image="https://rukminim1.flixcart.com/image/200/200/klcmoi80/monitor/o/c/t/vg27aq-tuf-gaming-vg27aq-asus-original-imagyh3f2y99qrrg.jpeg?q=70"
           name="Monitors"
           price="From 6500"
           model="ACER"
         /></div>
       </div>
  )
}

export default Itemlist