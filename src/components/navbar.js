import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../providers/cart_provider';
import { useUser } from '../providers/user_provider';
import { useEffect, useState } from 'react';
import { useProduct } from '../providers/product_provider';
import SearchResults from './searchbar_container';
import Profile from './profile';
import AltLogo from '../assets/shopcart-logo-new.png'


function NavBar () {
    const { cartProducts } = useCart()
    const { storeProducts } = useProduct()
    const { currentUser } = useUser()
    const user = currentUser
    const products = storeProducts
    const [results, setResults] = useState([])
    const [recommendations,setRecommendations] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = () => {
        const filteredResults = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setResults(filteredResults);
    };

    const updateRecommendations = (filteredResults) => {
        let recommendations = []
        filteredResults.map(result => {
            return result.tags.forEach((tag) => {
                if(!recommendations.includes(tag)) { // Check if the tag is not included in recommendations
                    recommendations.push(tag) // If not, push the tag into recommendations
                }
            })
        })
        setRecommendations(recommendations);
    }

    useEffect(() => {
        const filteredResults = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setResults(filteredResults)
        updateRecommendations(filteredResults)
    }, [searchTerm,products])


    return (
        <div className="[ navbar ][ py-[15px] ][ sticky top-0 ][ z-[2] ][ bg-[#003d29] ][ w-full h-[82px] tablet:w-[760px] ][ px-[40px] tablet:px-[20px] ][ flex flex-row ][ mx-auto ][ phone:hidden ]">
        <div className="[ nav-bar-container ][ flex flex-row [ mx-auto ][ w-full tablet:w-full ][ justify-between ] ">
            <a aria-label='shopcart button' href='/'>
                <img src={AltLogo}  className='w-[175px] h-[44px]'  alt='Alternate Logo'/>
            </a>
            <div className="[ nav-container ][ flex flex-row ][ w-auto h-[52px] tablet:w-auto ]">
                <div className="[ nav-menu ][ flex flex-row justify-evenly ][ w-[450px] ][ tablet:hidden ]">
                    <div className="[ category-menu ][ flex flex-row ][ my-auto ]">
                        <p className="[ category-txt ][ text-[#ffffff] text-[16px] font-medium leading-[20px] tracking-[.25px] ][ my-auto ]">Category</p>
                         <FontAwesomeIcon className='[ dropdown-icon ][ mt-[2px] ml-[5px] ]'  icon={faCaretDown} style={{color: '#A9A9A9'}} />
                    </div>
                    <div className="[ deals-container ][ flex flex-row ][ my-auto ]">
                        <p className="[ deals-txt ][ text-[#ffffff] text-[16px] font-medium leading-[20px] tracking-[.25px] ][ my-auto ]">Deals</p>
                    </div>
                    <div className="[ whats-new-container ][ flex flex-row ][ my-auto ]">
                        <p className="[ whats-new-txt ][ text-[#ffffff] text-[16px] font-medium leading-[20px] tracking-[.25px] ][ my-auto ]">What's New</p>
                    </div>
                    <div className="[ delivery-container ][ flex flex-row ][ my-auto ]">
                        <p className="[ delivery-txt ][ text-[#ffffff] text-[16px] font-medium leading-[20px] tracking-[.25px] ][ my-auto ]">Delivery</p>
                    </div>
                </div>
                <div className='[ search-area ]'>
                    <div className="[ search-bar-container ][ w-auto tablet:w-auto ][ my-auto ][ mt-[6px] ]">
                        <div className="[ search-bar ][ w-[450px] h-[40px] ][ rounded-[100px] ][ mx-auto my-auto ][ flex ][ relative ]">
                            <input onChange={(e) => setSearchTerm(e.target.value)} className="[ search-input ][ h-full w-full ][ bg-[#ffffff] ][ my-auto ][ rounded-[100px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] placeholder:font-medium text-[#808080] ]" placeholder="Search Shopcart..."/>
                            <button aria-label="search button" onClick={handleSearch} className="[ search-icon-container ][ w-[60px] h-[40px] ][ absolute top-0 right-0 ][ flex ]">
                                <svg className="[ search-icon ][ w-[20px] h-[20px] ][ mx-auto my-auto ]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.8" d="M8.33317 3.33317C5.57175 3.33317 3.33317 5.57175 3.33317 8.33317C3.33317 11.0946 5.57175 13.3332 8.33317 13.3332C11.0946 13.3332 13.3332 11.0946 13.3332 8.33317C13.3332 5.57175 11.0946 3.33317 8.33317 3.33317ZM1.6665 8.33317C1.6665 4.65127 4.65127 1.6665 8.33317 1.6665C12.0151 1.6665 14.9998 4.65127 14.9998 8.33317C14.9998 9.87376 14.4773 11.2923 13.5997 12.4212L18.0891 16.9106C18.4145 17.236 18.4145 17.7637 18.0891 18.0891C17.7637 18.4145 17.236 18.4145 16.9106 18.0891L12.4212 13.5997C11.2923 14.4773 9.87376 14.9998 8.33317 14.9998C4.65127 14.9998 1.6665 12.0151 1.6665 8.33317Z" fill="#231F1E"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                {searchTerm !== "" && <SearchResults results={results} recommendations={recommendations} />}
                </div>
            
            </div>
            <div className="[ nav-right-content ][ flex flex-row ][ h-auto ][ my-auto ]">
                < Profile user={user}/>
                <a href='/cart'  className="[ cart-container ][ relative ][ h-[30px] w-[60px] ][ ml-4 ][ flex flex-row ][ cursor-pointer ][ my-auto ]">
                    <FontAwesomeIcon className="[ cart-icon ][ h-full w-[40px] ][ mx-auto ][ my-auto ]" icon={faBasketShopping} style={{color: '#FFA33C'}}/>
                    <div className="[ cart-quantity ][ absolute ][ bg-[#00ba34] ][ h-[18px] w-[18px] ][ right-[10px] top-[20px] ][ rounded-full ][ text-[12px] text-center font-sans font-bold text-white ]">{ cartProducts.length > 0 ? cartProducts.length : 0}</div>
                </a>
            </div>
        </div>
    </div>
    );
}

export default NavBar;
