import { LiaAdjustSolid } from "react-icons/lia";
import { CiShoppingCart } from "react-icons/ci";

const Header = ({Modal,DarkMode,Dark,setHum1}) => {


  return (

   <header style={{backgroundColor: Dark? "black":"white"}}>
       
         <h1 style={{color: Dark? "white":"black"}}>Tech<span style={{color:'red'}}>nology</span></h1>

      <div className='HumburgerBar' onClick={()=> setHum1(elements => !elements)}>
          <div style={{backgroundColor: Dark? "white":"black"}}></div>
          <div style={{backgroundColor: Dark? "white":"black"}}></div>
          <div style={{backgroundColor: Dark? "white":"black"}}></div>
       </div>
                    
                    {/*/////Links/////*/}
          <div className='Links' style={{color: Dark? "white":"black"}}>
              <a href="#" style={{color: Dark? "white":"black"}}>Home</a>
              <a href="#items" style={{color: Dark? "white":"black"}}>Items</a> 
              <LiaAdjustSolid id="Light" size={30} onClick={DarkMode}/>
              <CiShoppingCart  id="Light" size={30} onClick={Modal} />
           </div>
          
   </header>

  )
}

export default Header