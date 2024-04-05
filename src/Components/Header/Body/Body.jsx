import img from '../../../assets/Humans.png'
import Button from '../Buttons/Button'


const Body = ({Body = "section",Dark,...props}) => {
  return (
 <Body {...props} style={{backgroundColor: Dark? "black":"white"}}>
  
<div className="Text" style={{color: Dark? "white":"black"}}>
   <h1>Ecommerce <span style={{color:"red"}}>Practice</span></h1>
   <p>Using React by Jayvee Maniquiz student</p>
   <p>at Bulacan state University Bustos campus</p>
   <Button id="exploreButton" style={{backgroundColor: Dark? "white":"black",color: Dark? "black":"white"}}/>
</div>

<img src={img} alt="" />

 </Body>
  )
}

export default Body