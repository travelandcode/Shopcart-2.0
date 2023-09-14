import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';
import Deals from '../components/Deals';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white ][ h-screen ]">
            <TopNavBar/>
            <NavBar/>
            <Deals />
        </div>
    );
}

export default Home;