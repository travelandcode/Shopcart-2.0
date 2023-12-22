import NavBar from '../components/navbar';
import TopNavBar from '../components/top_navbar'
import MobileTopNavBar from '../components/mobile/mobile_top_navbar';
import MobileNavBar from '../components/mobile/mobile_navbar';
import Footer from '../components/footer/footer_section'
import CartSection from '../components/cart/cart_section'

function Cart(){
    return(
        <div className="[ cart ][ flex flex-col ][ bg-[#f7f7f7] ][ overscroll-auto ][ w-screen ]">
            <MobileTopNavBar/>
            <MobileNavBar/>
            <TopNavBar />
            <NavBar />
            <CartSection />
            <Footer />
        </div>
    );
}

export default Cart;
