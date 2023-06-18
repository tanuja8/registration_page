import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './Component/Login';
import Logout from './Component/Logout';
// import From from './Component/From';


function App() {
  return (
    // ***Example of BrowserRouter,Routes****
  //    <Routes>
  //     <Route path='/'element={<div><h1>I AM HOME PAGE</h1></div>}/>
  //     <Route path='/contact' element={<div><h1>I AM CONTACT PAGE</h1></div>}/>
  //     <Route path='/about' element={<div><h1>I AM ABOUT PAGE</h1></div>}/>
  //    </Routes>
 <>
{/* //   <From></From> */}
<Login></Login>
<Logout></Logout>
  
  </>
  );
}

export default App;
