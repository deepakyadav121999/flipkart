import React from 'react'
 import "../styles/summer.css"
 import Box from './Box';
 import Box1 from'./Box1';
function Summer() {
  return (
    <div className="summer">
    <div className='summer_item'>
       <div>
        <Box1 para1={"Shop for a Cool"} para2={"Summer"}/>
       </div>
       <div><Box
       image={"https://rukminim1.flixcart.com/image/200/200/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70"}
       name="Slippers & Flip Flops"
       price={"Min. 70% Off"}
       /></div>
       <div>
        <Box
        image={"https://rukminim1.flixcart.com/image/200/200/l5cslu80/boxer/y/3/z/xl-white-mbb-07-supersquad-original-imaggfr24ebzhpbb.jpeg?q=70"}
        name="Men's Boxers"
        price={"Min. 50% Off"}
        
        />
       </div>
       <div>
        <Box
        image={"https://rukminim1.flixcart.com/image/200/200/k4d27ww0/water-dispenser/a/f/t/plastic-manual-hand-press-bottled-pump-water-dispenser-rixim-original-imafna8r2jzphjtj.jpeg?q=70"}
        name="Water Dispensers"
        price={"Min. 50% Off"}
        />
       </div>
       <div>
        <Box
    image={"https://rukminim1.flixcart.com/image/200/200/kgiaykw0/cap/x/x/a/free-neck-warmer-mralone-original-imafwqkrhbpkfxew.jpeg?q=70"}
    name="Men's Caps"
    price={"Min. 50% Off"}

        />
       </div>
       <div>
        <Box
        image={"https://rukminim1.flixcart.com/image/200/200/l186t8w0/bottle/u/m/m/1000-iconic-design-bottle-set-of-6-office-bottle-gym-bottle-1000-original-imagcu7gdxqsuzzh.jpeg?q=70"}
        name="Water Bottles"
        price={"Min. 50% Off"}
        />
       </div>
        
        </div>
        </div>
  )
}

export default Summer