import NavBar from '../components/navbar';
import TopNavBar from '../components/top_navbar'
import MobileTopNavBar from '../components/mobile/mobile_top_navbar';
import Footer from '../components/footer/footer_section'
import MobileNavBar from '../components/mobile/mobile_navbar';

import FAQs from '../constants/faq.json'
import FAQTabs from '../components/faq_tabs';

function FAQ () {

    const height = (50 * FAQs.length).toString() + "px" 
    return (
        <div className="[ home ][ flex flex-col ][ bg-[#f7f7f7] ][ h-full overscroll-auto ][ w-screen ]">
            <MobileTopNavBar/>
            <MobileNavBar/>
            <TopNavBar />
            <NavBar />
            <div className={`flex flex-col mx-auto p-[30px] h-[${height}] w-2/3 ]`}>
                <div className="[ faq-title-section ][ flex flex-col text-left ] ">
                    <p className="[ faq-txt ][ text-[36px] mb-[15px] font-[sans-serif] font-bold  ]">Frequently Asked Questions</p>
                    <p className="[ faq-description ][ font-sans text-[18px] ][ mb-[20px] ]">
                        We know what our customers ask us many time. <br />
                        By searching this part, you can find almost solutions you need to solve.
                    </p>
                </div>
                <p className="[ text-left text-[16px] font-bold ]">Search a Question asked before</p>
                <div className='[ search-area ][ mb-[30px] ]'>
                    <div className="[ search-bar-container ][ w-auto tablet:w-auto ][ my-auto ][ mt-[6px] ]">
                        <div className="[ search-bar ][ w-[550px] h-[40px] ][ rounded-[10px] ][ my-auto ][ flex ][ relative ]">
                            <input className="[ search-input ][ h-full w-full ][ bg-[#E0E0E0] ][ my-auto ][ rounded-[10px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="e.g. How can I track my package?"/>
                            <button aria-label="search button" className="[ search-icon-container ][ w-[60px] h-[40px] ][ absolute top-0 right-0 ][ flex ]">
                                <svg className="[ search-icon ][ w-[20px] h-[20px] ][ mx-auto my-auto ]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.8" d="M8.33317 3.33317C5.57175 3.33317 3.33317 5.57175 3.33317 8.33317C3.33317 11.0946 5.57175 13.3332 8.33317 13.3332C11.0946 13.3332 13.3332 11.0946 13.3332 8.33317C13.3332 5.57175 11.0946 3.33317 8.33317 3.33317ZM1.6665 8.33317C1.6665 4.65127 4.65127 1.6665 8.33317 1.6665C12.0151 1.6665 14.9998 4.65127 14.9998 8.33317C14.9998 9.87376 14.4773 11.2923 13.5997 12.4212L18.0891 16.9106C18.4145 17.236 18.4145 17.7637 18.0891 18.0891C17.7637 18.4145 17.236 18.4145 16.9106 18.0891L12.4212 13.5997C11.2923 14.4773 9.87376 14.9998 8.33317 14.9998C4.65127 14.9998 1.6665 12.0151 1.6665 8.33317Z" fill="#231F1E"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <FAQTabs faqs={FAQs} />
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;