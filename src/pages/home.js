import NavBar from '../components/navbar';
import TopNavBar from '../components/top_navbar'
import MobileTopNavBar from '../components/mobile/mobile_top_navbar';
import DiscountBanner from '../components/home/discount_banner';
import CategorySection from '../components/home/categories/category_section';
import BrandSection from '../components/home/brands/brand_section';
import DiscountBanner2 from '../components/home/discount_banner_2';
import Stores from '../components/home/stores/stores_section';
import Services from '../components/home/services/services_section';
import Footer from '../components/footer/footer_section'
import Carousel from '../components/home/carousel';
import MobileNavBar from '../components/mobile/mobile_navbar';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-[#f7f7f7] ][ h-full ][ overscroll-auto ][ w-screen ]">
            <MobileTopNavBar/>
            <MobileNavBar/>
            <TopNavBar />
            <NavBar />
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
