import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router , Route , Routes} from "react-router"

import Register from "./components/Register";

const App = () => {
  return (
  
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/login' element= {<Login />}></Route>
          <Route path='/register' element= {<Register />}></Route>
      </Routes>
    </Router>
  
  )
};

export default App;
