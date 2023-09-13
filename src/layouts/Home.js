import NavBar from '../components/NavBar';
import TopNavBar from '../components/TopNavBar';

function Home () {
    return (
        <div className="[ home ][ flex flex-col ][ bg-white][ h-screen ]">
            <TopNavBar/>
            <NavBar/>
        </div>
    );
}

export default Home;