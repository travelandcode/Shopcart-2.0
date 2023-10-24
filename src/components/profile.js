import React, { useEffect, useState } from 'react';
import LoginModal from "./login-modal/login_modal";
import { api } from '../service/axios';
import ProfilePic from '../images/software-developer.jpg'
import { useUser, ACTIONS } from '../providers/user_provider';

function Profile(){
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    <div className="[ account area ]">
                        <a onClick={openModal} className="[ account-container ][ h-[24px] w-[90px] ][ flex flex-row ][ cursor-pointer ]">
                            <img className="[ account-icon ][ h-full w-[24px] ][ mr-[11px] ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
                            <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] ]">Account</p>
                        </a>
                        <LoginModal onOpen={isModalOpen} onClose={closeModal} />
                    </div> 
                ):
                (
                    <a className="[ account-container ][ h-auto w-auto ][ flex flex-row ][ cursor-pointer ][ my-auto ]">
                        <img className="[ account-icon ][ h-[50px] w-[50px] ][ mr-[11px] ][ mx-auto ][ rounded-full ]" src={ProfilePic} />
                        <p className="[ account-txt ][ text-[#231f1e] text-[16px] font-medium leading-[20px] tracking-[.25px] text-left ][ my-auto ]">{user.displayName}</p>
                    </a>
                )
            }
        </>
    )
}

export default Profile;