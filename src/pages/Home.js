import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';
import Deals from '../components/Deals';
import DiscountBanner from '../components/DiscountBanner';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white ][ h-full ][ overscroll-auto ]">
            <TopNavBar/>
            <NavBar/>
            <DiscountBanner/>
            <Deals/>
        </div>
    );
}

export default Home;