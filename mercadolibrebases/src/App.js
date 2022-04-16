import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/__main.jsx';
import Cart from './pages/__cart';
import Checkout from './pages/__checkout';
import Detail from './pages/__detail.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg">
      {/* <Login/> */}
    <Router>
     <Navbar/>
       <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/product/:id" element={<Detail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

