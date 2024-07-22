import About from "./pages/About";
 import Home from "./pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Products from "./pages/dashboard/Products";
import Sales from "./pages/dashboard/Sales";
import Upload from "./pages/dashboard/Upload";
import Register from "./pages/Register";
import LoginUser from "./pages/LoginUser";
import Edit from "./pages/dashboard/Edit";


function App() {
  return (
    <div className="">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/sales" element={<Sales />} />
          <Route path="/dashboard/upload" element={<Upload/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/LoginUser" element={<LoginUser/>} />
          <Route path="dashboard/edit/:id" element={<Edit />} />
          

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;