import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/__main.jsx';
import ItemsSearch from './pages/__search';
import Cart from './pages/__cart';
import Checkout from './pages/__checkout';

function App() {
  return (
    <div className="bg">
    <Navbar/>
    
     {/* <Main/> */}

      {/* <ItemsSearch/> */}

      {/* <Cart/> */}

      <Checkout/>
  
    </div>
  );
}

export default App;
