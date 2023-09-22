import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';
import Deals from '../components/Deals';
import DiscountBanner from '../components/DiscountBanner';
import CategorySection from '../components/Categories/CategorySection';
import BrandSection from '../components/Brands/BrandSection';
import DiscountBanner2 from '../components/DiscountBanner2';
import BestSellers from '../components/BestSellers';
import Stores from '../components/Stores/Stores';
import Services from '../components/Services/Services';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white ][ h-full ][ overscroll-auto ]">
            <TopNavBar/>
            <NavBar/>
            <DiscountBanner/>
            <CategorySection/>
            <Deals/>
            <BrandSection />
            <DiscountBanner2 />
            <BestSellers />
            <Stores />
            <Services />
        </div>
    );
}

export default Home;