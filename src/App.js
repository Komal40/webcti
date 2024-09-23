import MainHome from "./mainHome";
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home2/Home2";
import Automotive from "./Components/Automotive/Automotive";
import IotSol from "./Components/IotSol/IotSol";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import { TeamSection } from "./Components/TeamSection/TeamSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import Consulting from "./Components/Consulting/Consulting";
import About from "./Components/About/About";
import Product from "./Components/Products/Products";
import Clients from "./Components/Clients/Clients";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import InContact from "./Components/InContact/InContact";
import Certificates from "./Components/Certificates/Certificates";
import NewProducts from "./Components/NewProducts/NewProducts";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Components/Products/ProductDetails";
import Auto_Details from "./Components/Automotive/Auto_Details";
import IotSol_Details from "./Components/IotSol/IotSol_Details";
import Login from "./Components/Registration/Login/Login";
import ConsultingServices from "./Components/ConsultingServices/ConsultingServices";
import ElectronicProducts from "./Components/ElectronicProducts/ElectronicProducts";
// import InContact from "./Components/InContact/InContact";
import Products from "./Components/Products/Products";
import ContFoot from "./Components/ContFoot/ContFoot";
// import NewProducts from "./Components/NewProducts/NewProducts";
import Prod_Foot from "./Components/NewProducts/Prod_Foot";
import Presentation from "./Components/Navbar/Presentation";
import Career from "./Components/Career/Career";
import CertificateSection from "./Components/CertificateSection/CertificateSection";
import Ratings from "./Components/Ratings/Ratings";
import Register from "./Components/Registration/Register/Register";
import { AuthProvider } from "./AuthContext";




// function myApp() {
//   return (
//     <>
//       <Home />
//       <Home2 />
//       <Automotive />
//       <IotSol />
//       <ServiceSection />
//       <Consulting />
//       <About />
//       <TeamSection />
//       <Testimonials />
//       <Certificates/>
//       {/* <Product /> */}

//       <NewProducts/>
//       <Contact/>
//       <Clients/>
//       <InContact/>
//       <Footer/>

//     </>
//   );
// }




const App = () => {
  return(
    <Router>
    <AuthProvider>

    <Navbar/>
     <Routes>
       <Route path='/' element={< MainHome />} />
       <Route path="/product" element={<ProductDetails />} />
       <Route path='/products' element={<Prod_Foot/>}/>
       <Route path='/autoDetails' element={<Auto_Details/>}/>
       <Route path='/iotDetails' element={<IotSol_Details/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/consulting' element={<ConsultingServices/>}/>
       <Route path='/electronic' element={<ElectronicProducts/>}/>
       <Route path='/contact' element={<ContFoot/>} />
       <Route path='/present' element={<Presentation/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/certificates' element={<CertificateSection/>}/>
     </Routes>
   </AuthProvider>

   </Router>
  )
}

export default App;






