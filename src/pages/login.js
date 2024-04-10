import Logo from '../assets/Logo.png'
import HappyPeople from '../assets/happy-people.png'
import GoogleLogo from '../assets/google.svg'
import FacebookLogo from '../assets/facebook.svg'
import { useState } from 'react'
import PasswordCriteriaModal from '../components/password_criteria_modal'

function LoginPage() {
    const [view,setView] = useState('login')
    const toggleView = (currentView) => {
        setView(currentView)
    }
    console.log(view)
    return(
        <div className="[ login-page ][ flex flex-row ][ w-full h-screen bg-[#E8E8E8] ]">
            <div className='[ login-section ][ w-4/5 h-5/6 ][ flex flex-row ][ mx-auto my-auto ][ bg-white ][ rounded-[50px] ][ shadow-2xl ][ p-[40px] ]'>
                <div className="[ left-panel ][ w-1/2 h-full ][ bg-orange-500 ][ shadow-2xl ][ rounded-[50px] ][ z-[100] ][ px-[40px] ][ relative flex-col ]">
                    <div className='[ left-panel-cotent ]'>
                        <p className='[ mt-[60px] ]mb-[25px] ][ text-[30px] font-bold text-white text-left ]'>Where Every Click Adds Value to Your Life, Filling Your Cart with Joy, Savings, and Everything in Between!</p>      
                        <img className='[ absolute ml-[25px] bottom-0 h-[60%] ]' src={HappyPeople} alt='Happy People'/>
                    </div>  
                </div>
                <div className="[ right-panel ][ w-1/2 ][ flex flex-col ]">
                    <div className='[ flex flex-col ][ w-[400px] ][ my-auto mx-auto ]'>
                        <div className='[ login-welcome-section ][ flex flex-col w-full ][ mb-[20px] ]'>
                                <img className='[ my-auto mx-auto ]' src={Logo} alt='Shopcart Logo'/>
                                <p className='[ font-sans font-bold text-[30px] ]'>{view ==='login' ? 'Welcome back to Shopcart' : 'Welcome to Shopcart'}</p>
                                <p className='[ font-sans font-normal text-gray-400 ]'>{view ==='login' ? 'Login to your account' : 'Register your account'}</p>
                        </div>
                        <div className='[ user-input ][ flex flex-col justify-end ]'>
                            {
                                view === 'signup' &&
                                <div className='[ flex flex-row mb-[20px] justify-between ]'>
                                    <div className="[ username-container ][ h-[60px] w-[49%] ][ rounded-[15px] ][ flex ][ relative ]">
                                        <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="First Name"/>
                                    </div>
                                    <div className="[ password-container ][ h-[60px] w-[49%] ][ rounded-[15px] ][ flex ][ relative ]">
                                        <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Last Name"/>
                                    </div>
                                </div>
                            }
                            <div className="[ username-container ][ w-full h-[60px] ][ rounded-[15px] ][ flex ][ relative ]">
                                <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Email address"/>
                            </div>
                            <div className="[ password-container ][ w-full h-[60px] ][ rounded-[15px] ][ mt-[20px] ][ flex ][ relative ]">
                                <input className="[ password-input ][ h-full w-full ][ bg-[#E8E8E8] ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ focus:outline-[#3898EC] focus:outline ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Password"/>
                            </div>
                            {
                                view === 'login' &&
                                <button className='[ flex justify-end ][ mt-[10px] ][ hover:text-gray-300 ]'>
                                    <p className='text-gray-400 hover:text-gray-300'>Forgot Password?</p>
                                </button>
                            }
                            
                        </div>
                        <button className='[ login-btn ][ bg-orange-400 ][ w-full h-[50px] ][ rounded-[15px] ][ text-white font-medium text-[16px] ][ mt-[25px] ][ hover:bg-orange-300 ]'>
                            { view === 'login' ? 'Login' : 'Sign Up'}
                        </button>   
                        <div class="relative flex py-5 items-center w-5/6 mx-auto">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <span class="flex-shrink mx-4 text-gray-400">{ view === 'login' ? 'Or Login with' : 'Or Register with'}</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div class="flex flex-row justify-between w-full">
                            <button class="[ google-btn ][ flex ][ border-2 border-solid border-[#E8E8E8] ][ w-[45%] h-[60px] ][ rounded-[15px] ][ hover:bg-gray-200 ]">
                                <div className='[google-btn-container ][ flex flex-row ][ my-auto mx-auto ]'>
                                    <img className='w-[25px] h-[25px]' src={GoogleLogo} alt='Google Logo'/>
                                    <p className='[ font-[Roboto] font-bold text-[17px] ][ ml-[5px] ]'>Google</p>
                                </div>
                            </button>
                            <button class="[ facebook-btn ][ flex ][ border-2 border-solid border-[#E8E8E8] ][ w-[45%] h-[60px] ][ rounded-[15px] ][ hover:bg-gray-200 ]">
                            <div className='[ facebook-btn-container ][ flex flex-row ][ my-auto mx-auto ]'>
                                    <img className='w-[25px] h-[25px]' src={FacebookLogo} alt='Google Logo'/>
                                    <p className='[ font-[Roboto] font-bold text-[17px] ][ ml-[10px] ]'>Facebook</p>
                                </div>
                            </button>
                        </div>
                        <div className='[ mt-[25px] ][ mx-auto flex flex-row ]'>
                            <p className='[ font-[Roboto] text-[16px] ]'>{ view === 'login' ? "Don't have an account?" : "Already have an account?"}</p>
                            <button  onClick={() => toggleView(view === 'login' ? 'signup' : 'login')} className='[ ml-[5px] ][ text-orange-400 text-[16px] font-bold font-[Roboto] ][ hover:text-orange-300'>{ view === 'login' ? 'Signup' : 'Login' }</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;