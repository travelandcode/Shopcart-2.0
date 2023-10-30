import React, { useEffect, useState } from 'react';
import LoginModal from "./login-modal/login_modal";
import { api } from '../service/axios';
import ProfilePic from '../assets/software-developer.jpg'
import { useUser, ACTIONS } from '../providers/user_provider';
import ProfileModal from './profile-modal/profile_modal';

function Profile (){ 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHover, setHover] = useState(false)
    const {currentUser,dispatch} = useUser()
    const user = currentUser.user

    
    useEffect(() => {
        api.get('/auth/user')
        .then(res =>{
            if(res.data && res.data.displayName!== ''){
                dispatch({type: ACTIONS.SET_USER, payload: res.data})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

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
                        <a onClick={openModal} className="[ account-container ][ h-[24px] w-[90px] ][ flex flex-row ][ cursor-pointer ]">
                            <img className="[ account-icon ][ h-full w-[24px] ][ mr-[11px] ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
                            <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] ]">Account</p>
                        </a>
                        <LoginModal onOpen={isModalOpen} onClose={closeModal} />
                    </div> 
                ):
                (
                    <div className='[ account-area ]'>
                         <a onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  className="[ account-container ][ h-auto w-auto ][ flex flex-row ][ cursor-pointer ][ my-auto ]">
                            <img className="[ account-icon ][ h-[50px] w-[50px] ][ mr-[11px] ][ mx-auto ][ rounded-full ]" src={ProfilePic} />
                            <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] text-left ][ my-auto ]">{user.displayName}</p>
                            <ProfileModal isOpen={isHover} name={user.displayName} email={user.email} pic={ProfilePic} />
                        </a>                    
                    </div>
                   
                )
            }
        </>
    )
}

export default Profile;