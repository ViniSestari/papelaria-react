import { Outlet, Link } from "react-router-dom"; 
import Menu from "../components/Menu";
import Header from "../components/Header";
import Rodape from "../components/Rodape";
import Banner from "../components/Banner";

function Layout() {
    return (
        <>
        <div>
            <Menu />
            <Header />
            <Banner />
            <Outlet />
        </div>
        <Rodape />
        </>
    );
}

export default Layout;
