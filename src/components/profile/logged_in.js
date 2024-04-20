import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountSignInBox from '../../assets/account-signed-in-1.png'
import { useState } from 'react';
import { useUser } from '../../providers/user_provider';

function LoggedInProfile({firstname}){
    const name = firstname
    const [showBox, setShowBox] = useState(false)
    const {signOut} = useUser()
    const show = () => {
        setShowBox(true)
    }
    const disappear = () => {
        setShowBox(false)
    }

    const handleSignOut = async () => {
       const response = signOut()
       if(response === 'Signed Out') window.location.reload()
    }
    return(

        // TODO: Fix the Adjust Issue with name
        <div onMouseOver={() => show()} onMouseOut={() => disappear()} className='[ signed-in-container ][ h-auto w-auto my-auto ][ flex flex-row ][ relative ]'>
            <p className='[ signed-in-text ][ font-sans text-[15px] w-[200px] text-right text-[#ffffff] font-medium ][ text-ellipsis truncate ]'>
                {`Hey, ${name}`}
                <p className='[ welcome-txt ]'>Welcome Back</p>
            </p>
            <FontAwesomeIcon className='[ dropdown-icon ][ mt-[25px] ml-[7px] ]'  icon={faCaretDown} style={{color: '#A9A9A9'}} />
            <img className={`[ not-signed-in-img ][ absolute z-[1] ][ top-[40px] -right-[15px] ][ shadow-[50px] ][ ${showBox ? 'visible' : 'hidden'} ]'`} src={AccountSignInBox} alt='sign-in-box' />
            <div onMouseOver={() => show()} onMouseOut={() => disappear()} className={`[ sign-in-btn-container ][ flex flex-col ][ absolute ][ top-[85px] right-[20px] ][ [ z-[2] ][ ${showBox ? 'visible' : 'hidden'} ]`}>
               <p className='[ w-[140px] ][ font-sans font-bold text-left text-[20px] ]'>Your Account</p>
               <button className='[ w-[120px] ][ font-sans font-semibold text-left text-[15px] text-[#A9A9A9] ][ mt-[5px] ][ hover:text-orange-300 ]'>Account</button>
               <button className='[ w-[120px] ][ font-sans font-semibold text-left text-[15px] text-[#A9A9A9] ][ hover:text-orange-300 ]'>Orders</button>
               <button className='[ w-[120px] ][ font-sans font-semibold text-left text-[15px] text-[#A9A9A9] ][ hover:text-orange-300 ]'>Become a Seller</button>
               <button className='[ w-[120px] ][ font-sans font-semibold text-left text-[15px] text-[#A9A9A9] ][ hover:text-orange-300 ]'>Customer Service</button>
               <button onClick={() => handleSignOut()} className='[ w-[120px] ][ font-sans font-semibold text-left text-[15px] text-[#A9A9A9] ][ hover:text-orange-300 ]'>Sign Out</button>

            </div>
        </div>
    )
}

export default LoggedInProfile