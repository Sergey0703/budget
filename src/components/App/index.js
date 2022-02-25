import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "../Home/index.js";
import About from "../About/index.js";
import Statistics from "../Statistics/index.js";


const App =()=> {
    
        return (
         <Router>   
         <>
         <nav>
           <ul>
               <li> 
                   <Link to="/">Home</Link>    
               </li>
               <li>
                   <Link to="/about">About</Link>
               </li>
               <li>
                   <Link to="/statistics">Statistics</Link>
               </li>
           </ul>

         </nav>
         <Routes>
<Route path="/about" element={<About/>}/>

<Route path="/statistics" element={<Statistics/>}/>

<Route path="/" element={<Home/>}/>

         </Routes>
        
         </>
         </Router>
        )

}

export default App;