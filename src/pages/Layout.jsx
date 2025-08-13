import { Outlet, Link } from "react-router-dom"; 
import Menu from "../components/Menu";
import Header from "../components/Header";
import Rodape from "../components/Rodape";



function Layout() {
    return (
        <>
        <div>
            <Menu />
            <Header />
            <Outlet />
        </div>
        <Rodape />
        </>
    );
}

export default Layout;
