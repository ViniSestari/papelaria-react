import './Menu.css'

function Menu() {
    return (
       <>
         <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <img src="logo.png" alt="Logo" className="logo" />
      <a className="navbar-brand" href="index.html">Início</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">

    <li className="nav-item">
            <a className="nav-link" href="serviços.html">Serviços</a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="sobre.html">Sobre a Loja</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">Nosso Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contato.html">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
       </>
    )
}

export default Menu
