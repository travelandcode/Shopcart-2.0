import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';
import DiscountBanner from '../components/DiscountBanner';
import CategorySection from '../components/Categories/CategorySection';
import BrandSection from '../components/Brands/BrandSection';
import DiscountBanner2 from '../components/DiscountBanner2';
import Stores from '../components/Stores/Stores';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white ][ h-full ][ overscroll-auto ]">
            <TopNavBar/>
            <NavBar/>
            <DiscountBanner/>
            <CategorySection/>
            <Carousel type="DEALS"/>
            <BrandSection />
            <DiscountBanner2 />
            <Carousel type="BEST SELLERS" />
            <Stores />
            <Services />
            <Footer />
        </div>
    );
}

export default Home;