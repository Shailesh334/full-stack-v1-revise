
import { Link, useNavigate } from "react-router"



const Navbar = ({token , setToken}) => {
   

   const navigate = useNavigate()

   const handleLogout = ()=>{
    localStorage.removeItem("token")
    setToken(null)
    navigate('/login')
   }

  return (

   
    <nav className="sticky top-0 z-50 bg-blue-500 text-white">
      <div className="w-full flex justify-between items-cente px-4 py-4 ">

        <Link to="/"><h2>PERN Auth</h2></Link>

        <div className="flex gap-8">
            {
              token ? (
                <>
                 <button onClick={handleLogout} className="px-2 cursor-pointer">Logout</button>
                </>
              ) : (
                <>
                 <Link to="/login" >Login</Link>
                 <Link to="/register" >Register</Link>
                </>
              )
            }
            
      
        </div>
      </div>
    </nav>
  )
}

export default Navbar
