import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Components/Products/ProductDetails";
import Auto_Details from "./Components/Automotive/Auto_Details";
import IotSol_Details from "./Components/IotSol/IotSol_Details";
import Login from "./Components/Registration/Login/Login";
import ConsultingServices from "./Components/ConsultingServices/ConsultingServices";
import ElectronicProducts from "./Components/ElectronicProducts/ElectronicProducts";
import InContact from "./Components/InContact/InContact";
import Products from "./Components/Products/Products";
import ContFoot from "./Components/ContFoot/ContFoot";
import NewProducts from "./Components/NewProducts/NewProducts";
import Prod_Foot from "./Components/NewProducts/Prod_Foot";
import Presentation from "./Components/Navbar/Presentation";



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/product" element={<ProductDetails />} />
//       <Route path='/products' element={<Prod_Foot/>}/>
//       <Route path='/autoDetails' element={<Auto_Details/>}/>
//       <Route path='/iotDetails' element={<IotSol_Details/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/consulting' element={<ConsultingServices/>}/>
//       <Route path='/electronic' element={<ElectronicProducts/>}/>
//       <Route path='/contact' element={<ContFoot/>} />
//       <Route path='/present' element={<Presentation/>}/>
//     </Routes>
//   </Router>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

reportWebVitals();
