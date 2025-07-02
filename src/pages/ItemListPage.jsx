import { useEffect } from "react";
import CardList from "../Components/CardList";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import useItemStore from "../store/useItemStore";
import Hero from "../Components/Hero";

const ItemListPage = () => {
    const posts = useItemStore(state => state.posts)
    const getPosts = useItemStore(state => state.getPosts)

    useEffect(() => {
        getPosts()
    }, []);

    return ( 
        <>
        <Header />
        <section>
            <Hero title="Lista de Items" description="Aqui encontraras todos los post de los usuarios publicados en la API publica JSON Placeholder" />
        </section>
        <section>
            <CardList data={posts} />
        </section>
        <Footer />
        </>
     );
}
 
export default ItemListPage;