import Logo from '../assets/Logo.png'
function LoginPage() {
    return(
        <div className="[ login-page ][ flex flex-row ][ w-full h-screen bg-[#E8E8E8] ]">
            <div className='[ login-section ][ w-4/5 h-5/6 ][ flex flex-row ][ mx-auto my-auto ][ bg-white ][ rounded-[50px] ][ shadow-2xl ][ p-[40px] ]'>
                <div className="[ left-panel ][ w-1/2 h-full ][ bg-orange-500 ][ shadow-2xl ][ rounded-[50px] ][ z-[100] ]">
                    
                </div>
                <div className="[ right-panel ][ w-1/2 ][ flex flex-col ]">
                    <div className='[ flex flex-col ][ w-[400px] ][ my-auto mx-auto ]'>
                        <div className='[ shopcart-title ][ h-[60px] rounded-full ][ flex flex-row ][ mx-auto ]'>
                            <div className='[ shopcart-title ][ border-2 border-sold ][ h-full w-[60px] rounded-full ][ flex flex-row ][ mx-auto ]'> 
                                <img className='[ h-[40px] w-[40px] ][ my-auto mx-auto ]' src={Logo} />
                            </div>
                            <p className='[ ml-[15px] ][ font-sans font-bold text-[30px] ][ my-auto ]'>Shopcart</p>
                        </div>
                        <div className='[ welcome-section ][ mb-[20px] ]'>
                            <p className='[ mx-auto mt-[10px] ][ font-sans font-bold text-[36px] ]'>Welcome Back</p>
                            <p className='[ mx-auto ][ font-sans font-normal text-[#C8C8C8] ]'>Please login to you account</p>
                        </div>
                        <div className='[ user-input ]'>
                            <div className="[ username-container ][ w-full h-[60px] ][ rounded-[15px] ][ flex ][ relative ]">
                                <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Email address"/>
                            </div>
                            <div className="[ password-container ][ w-full h-[60px] ][ rounded-[15px] ][ mt-[20px] ][ flex ][ relative ]">
                                <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Password"/>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default LoginPage;