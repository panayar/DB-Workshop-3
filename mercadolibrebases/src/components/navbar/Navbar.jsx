import Logo from '../../assets/LogoMercadoLibre.png';
import Carrito from '../../assets/cart.svg';
import './Navbar.css'
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {

return (
<BrowserRouter>
  <div className="nav-bg-color">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light nav-bg-color">
        <div className="container-fluid">
          <Link to='/'><img className='nav-img' src={Logo} alt=''></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <input className="nav-form " type="search" placeholder="Buscar productos" aria-label="Search"></input>
            </div>
            <form className="d-flex">
              <div className="carrito">
                <div className="n-items-carrito">
                  <p className='n-items'>0</p>
                </div>
               <Link to={'/cart'}><img className='icon-carrito' src={Carrito} alt="carrito" /></Link> 
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>


</BrowserRouter>

);
}