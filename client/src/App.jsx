import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router , Route , Routes} from "react-router"

import Register from "./components/Register";
import { useState } from "react";

const App = () => {

  const [token , setToken] = useState( localStorage.getItem("token"))

  return (
  
    <Router>
      <Navbar token={token} setToken={setToken}/>
      <Routes >
          <Route path='/' element= {<Home token={token} setToken={setToken}/>}></Route>
          <Route path='/login' element= {<Login token={token} setToken={setToken}/>}></Route>
          <Route path='/register' element= {<Register token={token} setToken={setToken}/>}></Route>
      </Routes>
    </Router>
  
  )
};

export default App;
