import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src="logo.png" alt="Logo" className="logo" />

        <Link className="navbar-brand" to="/">Início</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Servicos">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Sobre">Sobre Nós</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contato">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Blog">Nosso Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
