import Footer from "@/layout/Footer";
import HomeBooks from "./HomeBooks";
import HeroSection from "./ui/HeroSection";

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