import './Home.css'
import Header from "../../components/UI/header/Header";
import AboutHome from "../../components/UI/aboutHome/AboutHome";
import MisVis from "../../components/UI/misVis/MisVis";
import PimientaCafe from "../../components/UI/pimientaCafe/PimientaCafe";
import Footer from "../../components/UI/footer/Footer";
import Ubicacion from "../../components/UI/ubication/Ubication";
import MenuHeader from "../../components/UI/menuHeader/MenuHeader";
import Historia from "../../components/UI/historia/Historia";

function Home() {
    return (
        <>                
        <MenuHeader />
            <div className="HomeContainer">
                <Header/>
                <AboutHome />
                <MisVis />
                <Historia />
                <PimientaCafe />
                <Ubicacion />
                <Footer />
            </div>
        </>
    );
}

export default Home;