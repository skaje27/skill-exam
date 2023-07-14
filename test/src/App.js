import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Destination from "./Components/Destination";
import AboutUs from "./Components/AboutUs";
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App