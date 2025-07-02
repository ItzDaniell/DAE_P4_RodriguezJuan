import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Home = () => {
    return ( 
        <>
        <Header />
        <section>
            <Hero title="Página principal" description="En esta página encontrarás posts usando fetching de datos con Axios y Zustand" />
        </section>
        <section>
            
        </section>
        <Footer />
        </>
     );
}
 
export default Home;