import React, { useEffect, useRef, useState } from 'react';
import LoginModal from "./login-modal/login_modal";
import { api } from '../service/axios';
import ProfilePic from '../assets/software-developer.jpg'
import { useUser } from '../providers/user_provider';
import ProfileModal from './profile-modal/profile_modal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile ({user}){ 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHover, setHover] = useState(false)


    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <>
            {
                !user ?
                (
                    <div className="[ account-area ]">
                        <a onClick={openModal} className="[ account-container ][ h-[30px] w-[60px] ][ flex flex-row ][ cursor-pointer ]">
                            <FontAwesomeIcon className="[ account-icon ][ h-full w-[34px] ][ mx-auto my-auto ]" icon={faUser} style={{color: "#00ba34"}} />
                        </a>
                        <LoginModal onOpen={isModalOpen} onClose={closeModal} />
                    </div> 
                ):
                (
                    <div className='[ account-area ]'>
                         <a onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  className="[ account-container ][ h-auto w-auto ][ flex flex-row ][ cursor-pointer ][ my-auto ]">
                            <img className="[ account-icon ][ h-[50px] w-[50px] ][ mr-[11px] ][ mx-auto ][ rounded-full ]" src={ProfilePic} />
                            <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] text-left ][ my-auto ]">{user.displayName}</p>
                            <ProfileModal isOpen={isHover} name={user.name} email={user.email} pic={ProfilePic} />
                        </a>                    
                    </div>
                   
                )
            }
        </>
    )
}

export default Profile;