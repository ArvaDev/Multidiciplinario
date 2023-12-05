import Header from "../components/organism/Header";
import About from "../components/organism/About";
import MisVis from "../components/organism/MisVis";
import InfoCards from "../components/organism/InfoCards";
import Footer from "../components/organism/Footer";
import Ubicacion from "../components/organism/Ubication";
import Products from "../components/organism/Products";

function Home() {
    return ( 
        <>
            <Header/>
            <About/>
            <MisVis/>
            <InfoCards/>
            <Products/>
            <Ubicacion/>
            <Footer/>
        </>
    );
}

export default Home;