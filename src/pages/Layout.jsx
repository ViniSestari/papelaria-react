import { Outlet, useLocation } from "react-router-dom"; 
import Menu from "../components/Menu";
import Header from "../components/Header";
import Rodape from "../components/Rodape";

function Layout() {
  const location = useLocation();

  let titulo = "";
  let subtitulo = "";

  switch (location.pathname) {
    case "/":
      titulo = "Papelaria Mickey";
      subtitulo = "Tudo para sua criatividade ganhar vida!";
      break;
    case "/Contato":
      titulo = "Contato";
      subtitulo = "Fale com a gente! Estamos prontos para te atender e tirar suas dúvidas.";
      break;
    case "/Blog":
      titulo = "Nosso Blog";
      subtitulo = "Fique por dentro das novidades, dicas e inspirações do mundo da papelaria!";
      break;
    case "/Servicos":
      titulo = "Serviços";
      subtitulo = "Veja o que oferecemos para você!";
      break;
    case "/Sobre":
      titulo = "Sobre a Papelaria Mickey";
      subtitulo = "Conheça nossa história, valores e o carinho que temos por você!";
      break;
    default:
      titulo = "Papelaria Mickey";
      subtitulo = "Tudo para sua criatividade ganhar vida!";
  }

  return (
    <>
      <div>
        <Menu />
        <Header titulo={titulo} subtitulo={subtitulo} />
        <Outlet />
      </div>
      <Rodape />
    </>
  );
}

export default Layout;
