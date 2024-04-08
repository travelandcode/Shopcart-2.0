import DiscountBanner from '../components/home/discount_banner';
import CategorySection from '../components/home/categories/category_section';
import BrandSection from '../components/home/brands/brand_section';
import DiscountBanner2 from '../components/home/discount_banner_2';
import Stores from '../components/home/stores/stores_section';
import Services from '../components/home/services/services_section';
import Carousel from '../components/home/carousel';
import BasePage from '../layouts/base_page';

function Home () {
    return (
        <BasePage>
            <DiscountBanner/>
            <CategorySection/>
            <Carousel type="DEALS"/>
            <BrandSection />
            <DiscountBanner2 />
            <Carousel type="BEST SELLERS" />
            <Stores />
            <Services />
        </BasePage>
    );
}

export default Home;
