import Swal from 'sweetalert2'
import Cat from '../../../assets/cat-nyan-cat.gif'

const Button = ({...props}) => {
  return (
    <>
    <button {...props} onClick={()=>{
      Swal.fire({
        title: "Hi Im Jayvee Thanks for use this website, Please Explore",
        width: 600,
        padding: "3em",
        color: "rgb(32, 32, 32)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgb(32, 32, 32)
          url(${Cat})
          left top
          no-repeat
        `
      });
    }}>Explore</button>
    </>
  )
}

export default Button