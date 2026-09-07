import { Link } from "react-router"



const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white">
      <div className="w-full flex justify-between items-cente px-4 py-4 ">

        <Link to="/"><h2>PERN Auth</h2></Link>

        <div className="flex gap-8">
             <Link to="/login" >Login</Link>
             <Link to="/register" >Register</Link>
      
        </div>
      </div>
    </nav>
  )
}

export default Navbar
