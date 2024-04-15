import Logo from '../assets/Logo.png'
import HappyPeople from '../assets/happy-people.png'
import GoogleLogo from '../assets/google.svg'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import CreateUserToast from '../components/toasts/createUserToast'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Helper from '../util/helper'

function LoginPage() {
    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isValidEmail,setIsValidEmail] = useState(true)
    const [isEmailEmpty,setIsEmailEmpty] = useState(false)
    const [isPasswordEmpty,setIsPasswordEmpty] = useState(false)
    const [isIncorrectCredentials,setIsIncorrectCredentials] = useState(false)
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)
    const [showToast, ] = useState(false)
    const history = useHistory()
    const helper = new Helper()

    const changePasswordtoHidden = () => {
        setIsPasswordHidden(!isPasswordHidden)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
    const handleBtn = async () => {

        setIsValidEmail(validateEmail(email)) 
        setIsEmailEmpty(helper.isStringEmptyOrNullOrWhitespace(email))
        setIsPasswordEmpty(helper.isStringEmptyOrNullOrWhitespace(password))

        try{
            if(isEmailEmpty || isPasswordEmpty) return
            const response =  await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email,password}),
                credentials: 'include'
            })
            const data = await response.json();
            if(data.message === 'User Login was successful' || response.status === 200) window.location.href = '/home'
            if(data.message === 'Login Attempt Failed' || response.status === 401) setIsIncorrectCredentials(true)
        }catch(error){
            console.log(error)
        }
        
    }

    const handleGoogleBtn = async () => {
        try{
            // TODO: - This is a temporary fix. Remember to fix CORS Error associated with google oauth using the FETCH functionality

            window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`

            
        }catch(error){
            console.error(error)
        }
    }

    useEffect( () => {
        getUser()
    })

    async function getUser(){
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
                method: 'GET',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                
            })
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            if(response.ok || result.user){
                history.push('/home')
            }
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    }

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
                                <p className='[ font-sans font-bold text-[30px] ]'>Welcome back to Shopcart</p>
                                <p className='[ font-sans font-normal text-gray-400 ]'>Login to your account</p>
                        </div>
                        <div className='[ user-input ][ flex flex-col justify-end ]'>
                            <div className="[ email-container ][ w-full h-[60px] ][ rounded-[15px] ][ flex ][ relative ]">
                                <input onChange={handleEmailChange} value={email} className="[ email-input ][ h-full w-full ][ bg-[#E8E8E8] ][ outline-none ][ my-auto ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ placeholder:text-[#808080] text-[#808080] ]" placeholder="Email address" required/>
                            </div>
                            {isEmailEmpty && <p className='[ email-error-message ][ text-left font-sans text-[14px] font-bold ][ mt-[3px] text-[#FF3131] ]'>Email Address is required</p>}
                            {(!isValidEmail && !isEmailEmpty) &&<p className='[ email-error-message ][ text-left font-sans text-[14px] font-bold ][ mt-[3px] text-[#FF3131] ]'>Invalid Email Address</p>}
                            <div className="[ password-container ][ w-full h-[60px] ][ rounded-[15px] ][ bg-[#E8E8E8] ][ mt-[20px] ][ flex ][ relative ]">
                                <input onChange={handlePasswordChange} value={password} className="[ password-input ][ h-full w-full ][ my-auto ][ bg-[#E8E8E8] ][ rounded-[15px] ][ pl-[20px] pr-[50px] ][ outline-none ][ placeholder:text-[#808080] text-[#808080] ]" type={isPasswordHidden ? 'password' : ''} placeholder="Password" required/>
                                <button onClick={() => changePasswordtoHidden()} className="[ eye-container ][ w-[60px] h-[40px] ][ my-auto ][ flex ]">
                                    {
                                        isPasswordHidden ?
                                            <FontAwesomeIcon className="[ h-[25px]  w-[25px] ][ my-auto mx-auto ]" icon={faEyeSlash} style={{color: "#D0D0D0"}} />
                                        :
                                            <FontAwesomeIcon className="[ h-[25px]  w-[25px] ][ my-auto mx-auto ]" icon={faEye} style={{color: "#D0D0D0"}} />
                                    }
                                </button>
                            </div>
                            {isPasswordEmpty &&<p className='[ password-error-message ][ text-left font-sans text-[14px] font-bold ][ mt-[3px] text-[#FF3131] ]'>Password is required</p>}
                            {isIncorrectCredentials &&<p className='[ incorrect-credentials-error-message ][ text-left font-sans text-[14px] font-bold ][ mt-[3px] text-[#FF3131] ]'>Incorrect Email or Password</p>}
                            <button className='[ flex justify-end ][ mt-[10px] ][ hover:text-gray-300 ]'>
                                <p className='text-gray-400 hover:text-gray-300'>Forgot Password?</p>
                            </button>
                        </div>
                        <button type='submit' onClick={() =>{handleBtn()}} className='[ login-btn ][ bg-orange-400 ][ w-full h-[50px] ][ rounded-[15px] ][ text-white font-medium text-[16px] ][ mt-[25px] ][ hover:bg-orange-300 ]'>
                            Login
                        </button>   
                        <div class="relative flex py-5 items-center w-5/6 mx-auto">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <span class="flex-shrink mx-4 text-gray-400">Or Login With</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <button onClick={() => {handleGoogleBtn()}} class="[ google-btn ][ flex ][ border-2 border-solid border-[#E8E8E8] ][ h-[60px] w-full ][ rounded-[15px] ][ hover:bg-gray-200 ]">
                            <div className='[google-btn-container ][ flex flex-row ][ my-auto mx-auto ]'>
                                <img className='w-[25px] h-[25px]' src={GoogleLogo} alt='Google Logo'/>
                                <p className='[ font-[Roboto] font-bold text-[17px] ][ ml-[5px] ]'>Google</p>
                            </div>
                        </button>
                        <div className='[ mt-[25px] ][ mx-auto flex flex-row ]'>
                            <p className='[ font-[Roboto] text-[16px] font-medium ]'>Don't have an account?</p>
                            <a href='/signup' className='[ ml-[5px] ][ text-orange-400 text-[16px] font-bold font-[Roboto] ][ hover:text-orange-300'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            {
                showToast && < CreateUserToast />
            }
        </div>
    );
}


export default LoginPage;