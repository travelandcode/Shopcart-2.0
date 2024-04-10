import NavBar from '../components/navbar';
import TopNavBar from '../components/top_navbar'
import MobileTopNavBar from '../components/mobile/mobile_top_navbar';
import Footer from '../components/footer/footer_section'
import MobileNavBar from '../components/mobile/mobile_navbar';

function BasePage({children}){
    return(
        <div className="[ base-page ][ flex flex-col ][ bg-[#f7f7f7] ][ h-full overscroll-auto ][ w-screen ]">
            <NavBar />
                {children}
            <Footer />
        </div>
    );
}

export default BasePage;