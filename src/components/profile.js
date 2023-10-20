import React, { useState } from 'react';
import LoginModal from "./login-modal/login_modal";

function Profile(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const isSignedIn = props.signIn
    if(!isSignedIn){
        return(
            <div className="[ account area ]">
                <a onClick={openModal} className="[ account-container ][ h-[24px] w-[90px] ][ flex flex-row ][ cursor-pointer ]">
                    <img className="[ account-icon ][ h-full w-[24px] ][ mr-[11px] ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
                    <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] ]">Account</p>
                </a>
                <LoginModal onOpen={isModalOpen} onClose={closeModal} />
            </div> 
        )
    }
    return(
        <a className="[ account-container ][ h-[24px] w-[90px] ][ flex flex-row ][ cursor-pointer ]">
            <img className="[ account-icon ][ h-full w-[24px] ][ mr-[11px] ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
            <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] ]">Account</p>
        </a>
    )
}

export default Profile;