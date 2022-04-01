import Logo from '../../assets/logoMercadoLibre.png';
import Carrito from '../../assets/cart.png';
import './Navbar.css'

export default function Navbar() {

return (
<div className="nav-bg-color">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light nav-bg-color">
      <div className="container-fluid">
        <img src={Logo} alt='logoMercadoLibre'></img>
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
              <img className='icon-carrito' src={Carrito} alt="carrito" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</div>
);
}