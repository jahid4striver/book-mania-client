import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Get All Latest Books</h1>
                    <p className="py-6">Book Mania Book Catelog Will Help You To Enrich Your Knowledge With Worlds Greatest Books</p>
                    <Link to='/login'><button className="btn btn-error text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;