import {Datas} from '../Datas/Data.js';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Items = ({Sections = "div",addToCart,Dark,...props}) => {

  useEffect(()=>{
  
AOS.init();
 
  },[])
    return (
    <Sections {...props} style={{backgroundColor: Dark? "black":"white"}}>
      {
        Datas.map(elements =>{
            return(
                <div key={elements.id} className='Cards' style={{color: Dark? "white":"black"}} data-aos="fade-up">
                  <img src={elements.img} alt="" />
                  <h3> {elements.item}</h3>
                  <h3>Name: {elements.name}</h3>
                  <h3>Price: {elements.price}</h3>
                  <button onClick={()=> addToCart(elements.name,elements.price,elements.id,elements.img)}>Add to cart</button>
                </div>
            )
        })
      }
    </Sections>
  )
}

export default Items