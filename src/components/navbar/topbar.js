function TopBar(){
    return(
        <div className="[ top-bar ][ bg-[#003d29] h-[36px] ][ py-[7px] ][ flex flex-row ][ phone:hidden ][ tablet:w-screen ]" >
            <div className=" [ top-bar ][ flex flex-row ][ mx-auto px-[40px] tablet:px-[20px] ][ w-[1360px] tablet:w-[740px] ][ justify-between ]">
                <div className="[ num ][ flex flex-row ][ space-x-1 ]">
                    <svg className="[ phone-logo ][ h-[16px] w-[16px] ][ my-auto ]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46683 10.5325C0.868173 5.93332 1.52209 3.82727 2.00687 3.14861C2.06915 3.03892 3.60415 0.741091 5.24956 2.08922C9.33372 5.45281 4.16324 4.97725 7.59277 8.40736C11.023 11.8368 10.5474 6.66647 13.9104 10.7498C15.2586 12.3958 12.9607 13.9308 12.8517 13.9923C12.173 14.4778 10.0662 15.1317 5.46683 10.5325Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="[ phone-txt ][ text-white text-[12px] font-[Roboto] ][ my-auto ]">+18761234567</p>
                </div>
                <div className="[ sale-section ][ mx-auto ][ text-white text-[12px] ][ flex flex-row ][ tablet:hidden ]">
                    <p className="[ sale ][ font-[Roboto] text-[14px] ]">
                        Get 50% Off on Selected Items &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Shop Now
                    </p >
                </div>
                <div className="[ top-menu-section ][ justify-content-end ][ flex flex-row ][ w-[210px] ] ">
                    <div className="[ language-menu ][ flex flex-row ][ w-2/5  ]">
                        <p className="[ language-txt ][ text-white text-[12px] font-[Roboto] ][ my-auto ]">Eng</p>
                        <svg className="[ dropdown-img ][ text-white ][ w-[12px] h-[12px] ][ my-auto ][ ml-4 ]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <g class="nc-icon-wrapper" fill="currentColor">
                                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                    <div className="[ location-menu ][ flex flex-row ][ w-3/5 phone:justify-end ]">
                        <p className="[ location-txt ][ text-white text-[12px] font-[Roboto] ][ my-auto ]">Location</p>
                        <svg className="[ dropdown-img ][ text-white ][ w-[12px] h-[12px] ][ my-auto ml-4 ]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <g class="nc-icon-wrapper" fill="currentColor">
                                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default TopBar;