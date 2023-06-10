import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <h1>Logo</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon" />

          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <li className="nav-item active" aria-current="page" href="#">tienda</li>
              <li className="nav-item" href="#">libros</li>
              <li className="nav-item" href="#">productos</li>
              <li className="nav-item disabled">contacto</li>

              <CartWidget/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar