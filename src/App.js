import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import From from './Component/From';
import Test from './Component/Test'

function App() {
  return (
    // ***Example of BrowserRouter,Routes****
  //    <Routes>
  //     <Route path='/'element={<div><h1>I AM HOME PAGE</h1></div>}/>
  //     <Route path='/contact' element={<div><h1>I AM CONTACT PAGE</h1></div>}/>
  //     <Route path='/about' element={<div><h1>I AM ABOUT PAGE</h1></div>}/>
  //    </Routes>
 <>
  <From></From>
  {/* <Test></Test> */}
  </>
  );
}

export default App;
