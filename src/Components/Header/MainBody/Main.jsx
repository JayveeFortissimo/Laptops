import Swal from 'sweetalert2'
const Main = ({Mains = 'main',children,Modals,Hum1,setHum1}) => {

  return (
    <Mains>
{Modals}

{Hum1 &&
  <div className="AfterModal">
 <div onClick={()=>{Swal.fire("No function Here, Go back haha!"); setHum1(element => !element)}}><h1>Home</h1></div>
 <div  onClick={()=>{Swal.fire("No function Here, Go back haha!"); setHum1(element => !element)}}><h1>Items</h1></div>
</div>
}

{children}

    </Mains>

  )
}

export default Main