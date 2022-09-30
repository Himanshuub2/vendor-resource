import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import Resource from './components/Resource';
import Vendor from './components/Vendor';
import Dashboard from './components/Dashboard';

function App() {
  return (
    
    <div className="App">
      <Home/>
      <Routes>
          
          <Route  path = "/vendor" element = {<Vendor/>} />
          <Route  path = "/resource" element = {<Resource/>} />
          <Route  path = "/allusers" element = {<Dashboard/>} />
        
      </Routes>
    </div>
   
  );
}

export default App;
