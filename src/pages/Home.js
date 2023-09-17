import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';
import Deals from '../components/Deals/Deals';
import DiscountBanner from '../components/DiscountBanner';
import CategorySection from '../components/Categories/CategorySection';
import BrandSection from '../components/Brands/BrandSection';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white ][ h-full ][ overscroll-auto ]">
            <TopNavBar/>
            <NavBar/>
            <DiscountBanner/>
            <CategorySection/>
            <Deals/>
            <BrandSection />
        </div>
    );
}

export default Home;