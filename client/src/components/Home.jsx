import { useEffect } from "react"
import { useNavigate } from "react-router"


const Home = ({token , setToken}) => {
  const navigate = useNavigate()

useEffect(()=>{
  if (!token) {
      navigate("/register");
      return;
    }
}, [token , navigate])
  
  
  return (
    <div>
      Home 
    </div>
  )
}

export default Home
