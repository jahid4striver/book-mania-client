import Footer from "@/layout/Footer";
import HomeBooks from "../components/HomeBooks";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <HomeBooks/>
            <Footer/>
        </div>
    );
};

export default Home;