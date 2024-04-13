 import HeroSection from './components/HeroSection';
 import SelledProduct from './SelledProduct';
 const Home = () => {
    return(<>
        <section className="bg-light">
       <br></br><br></br><hr></hr>
        <HeroSection />
        <hr></hr>
        <SelledProduct/>
        <hr></hr>
        </section>
        </>
    )
}
export default Home