import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Header/Body/Body';
import Items from './Components/Header/Items/Items';
import Swal from 'sweetalert2';
import Main from './Components/Header/MainBody/Main';
import Footer from './Components/Footer';
import { useState } from 'react';


function App() {

  const [cart,setcart] = useState([]);
  const [modal,openModal] = useState(false);
   const [light,toDark] = useState(false);
   const [Hum1,setHum1] = useState(false);
  let Total = [0];

  //Open The Modals AddtoCart
  function openModals(){
  openModal(open => !open);
  }

  //Push The items into Cart State
function addToCart(name,price,id,img){
  setcart(item =>[...item,{Name:name,Price:price,id:id,img}]);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Items Add Successfully",
    showConfirmButton: false,
    timer: 1500
  });
}
//Remove Items by ID
function Remove(id){
setcart(exist =>{
  return exist.filter((element) => element.id !== id)
})
}

//Set DarkMMode
function DarkMode(){
  toDark(element => !element);
}

  return (
    <>

<Main Modals={
  <>
  {
    modal &&
   <div className='Modal'>
    <div className='Container'>
          <div>
            <button onClick={()=>openModal(close => !close)} style={{cursor:"pointer"}}>X</button>
          </div>
          
            {
              cart.map(elemet => {
                Total.push(elemet.Price)
                
                return(
                  <div key={elemet.id}>
                    <div className='Items'>
                        <img src={elemet.img}alt="" id='images' />
                        <div className='Text'>
                           <h3>{elemet.Name}</h3>
                           <h3>{elemet.Price}</h3>
                        </div>
                        <button style={{marginLeft:"3rem",cursor:"pointer"}} onClick={()=> Remove(elemet.id)}>Remove</button>
                    </div>
                    
                    </div>
                )
              })
            }         
          
          <h2>Total:{Total.reduce((a,b)=> a+b)}</h2>
          <button style={{width:"10rem",cursor:"pointer"}} onClick={()=>{
            Swal.fire({
              title: "Thank U!",
              text: "Please back aghain!",
              icon: "success"
            });
          setcart(element=> {
            return element.filter(id=> id>=1);
          })
          }}>Buy All</button>
    </div>
   </div>
}
  </>
}  Hum1={Hum1}  setHum1={setHum1}>

<Header Modal={openModals} DarkMode={DarkMode} Dark={light} setHum1={setHum1}/>
     <Body id="section" Dark = {light}/>
     <Items id="items" addToCart={addToCart} Dark ={light}/>
  <Footer id="footer"/>
</Main>
   
    </>
  )
}

export default App
