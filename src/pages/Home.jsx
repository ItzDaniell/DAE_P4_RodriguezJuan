import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <Hero
          title="Página principal"
          description="En esta página encontrarás posts usando fetching de datos con Axios y Zustand"
        >
          <Link to="/items">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Ver Posts
            </button>
          </Link>
        </Hero>
      </section>
      <Footer />
    </>
  );
};

export default Home;
