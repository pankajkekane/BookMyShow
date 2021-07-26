


import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";


//component
import HomePage from "./pages/Home.page";


//css files of slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function App() {
  return(
  <>
 <DefaultHOC path="/" exact component={HomePage} /> 
 <Route/>
  </>
  );
  
};

export default App;
