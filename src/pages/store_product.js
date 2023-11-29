import NavBar from '../components/navbar';
import TopNavBar from '../components/top_navbar'
import MobileTopNavBar from '../components/mobile/mobile_top_navbar';
import MobileNavBar from '../components/mobile/mobile_navbar';
import Footer from '../components/footer/footer_section'
import ProductSection from '../components/product/product_section';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

function StoreProduct(){
    const {id} = useParams()
    return(
        <div className="[ cart ][ flex flex-col ][ bg-[#f7f7f7] ][ overscroll-auto ][ w-screen ]">
            <MobileTopNavBar/>
            <MobileNavBar/>
            <TopNavBar />
            <NavBar />
            <ProductSection id={id} />
            <Footer />
        </div>
    );
}

export default StoreProduct;