import { useState } from "react"
import { useNavigate } from "react-router"



const Login = ({token , setToken}) => {

  const [form , setForm] = useState({
    username : "",
    password : ""
  })
  const navigate =  useNavigate()

  const [error , setError] = useState(null)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
       
      const response = await fetch("http://localhost:5000/auth/login" , {
        method : "POST" ,
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username : form.username ,
          password : form.password
        })
      })

      const data = await response.json()

      if(!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem('token' , data.token)
      setToken(data.token)
       navigate('/')
       

    }catch(err){
      console.log(err.message)
      setError("Invalid username or password")
    }
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center ">
      <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>

        <h1 className="text-xl mb-4 ">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="username" placeholder="username" className="border w-full p-2 mb-3 rounded-md" value={form.username} onChange={(e) => setForm({
          ...form , username : e.target.value
        })}/>
         <input type="password" placeholder="password" className="border w-full p-2 mb-3 rounded-md" value={form.password} onChange={(e) => setForm({
          ...form , password : e.target.value
        })}/>
        <button className="bg-blue-500 text-white w-full border p-2 mb-3 rounded-md cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default Login
