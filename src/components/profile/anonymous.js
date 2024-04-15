import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountSignInBox from '../../assets/account-sign-in.png'
import { useState } from 'react';

function AnonymousProfile(){
    const [showBox, setShowBox] = useState(false)
    const show = () => {
        setShowBox(true)
    }
    const disappear = () => {
        setShowBox(false)
    }
    return(
        <div onMouseOver={() => show()} onMouseOut={() => disappear()} className='[ not-signed-in-container ][ h-auto w-auto my-auto ][ flex flex-row ][ relative ]'>
            <p className='[ not-signed-in-text ][ font-sans text-[15px] text-left text-[#ffffff] font-medium ]'>Hello, sign in</p>
            <FontAwesomeIcon className='[ dropdown-icon ][ mt-[4px] ml-[5px] ]'  icon={faCaretDown} style={{color: '#A9A9A9'}} />
            <img onMouseOver={() => show()} onMouseOut={() => disappear()} className={`[ not-signed-in-img ][ absolute z-[1] ][ top-[47px] right-[53px] ][ scale-y-[3] scale-x-[2.5] ][ shadow-[50px] ][ ${showBox ? 'visible' : 'hidden'} ]`} src={AccountSignInBox} alt='sign-in-box' />
            <div className={`[ sign-in-btn-container ][ flex flex-col ][ absolute ][ ${showBox ? 'visible' : 'hidden'} ]`}>
                <a href='/login' className='[ sign-in-button ][ absolute z-[2] ][ w-[200px] h-[30px] ][ top-[44px] -right-[100px] ][ bg-[#ff7006] hover:bg-orange-300 rounded-[7px] ][ flex ]'><p className='[ sign-in-btn-txt ][ text-white font-semibold mx-auto my-auto font-sans ]'>Sign In</p></a>
                <p className='absolute top-[75px] -right-[80px] z-[2] w-[200px] font-sans text-[14px] text-[#989898] font-medium'>New to Shopcart?</p>
                <a href='/signup' className='[ absolute ][ w-[55px] top-[75px] -right-[93px] ][ z-[2] ][ text-[14px] text-[#ff7006] hover:text-orange-300 font-sans font-bold  ]'>Sign up</a>
            </div>
        </div>
    )
}

export default AnonymousProfile