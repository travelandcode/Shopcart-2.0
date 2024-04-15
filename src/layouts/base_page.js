import NavBar from '../components/navbar';
import Footer from '../components/footer/footer_section'

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