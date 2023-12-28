import { api } from '../../service/axios';
import ProfileModalOption from './profile_modal_option';

function ProfileModal({isOpen,pic,name,email}){
    const logout = () => {
        api.post('/logout')
            .then(res =>{
                window.location.reload();
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return(
        <div className={`[ profile-modal ][ bg-white ][ rounded-[20px] ][ flex flex-col ][ border-2 border-solid ][ w-[350px] h-auto ][ px-[10px] py-[20px] ][ fixed ][ top-[102px]  right-[175px] ][ z-[1] ]`} style={{display:  isOpen ? 'block': 'none'}}>
            <div className="[ profile-account ][ bg-white ][ border-b-2 ][ flex flex-row ][ w-full ][ h-[70px] ][ px-[10px] ][ relative ] ">
                <img className="[ profile-img ][ w-[50px] h-[50px] ][ my-auto ][ rounded-full ] " src={pic} />
                <div className='[ profile-name-section ][ flex flex-col ][ ml-[8px] mt-[10px] ][ w-auto ]'>
                    <p className='[ profile-name-txt ][ font-semibold text-left ]'>{name}</p>
                    <p className='[ profile-email-txt ][ text-[14px] font-[Assistant] font-[500] ]'>{email}</p>
                </div>
                <svg className='[ edit-icon ][ absolute ][ right-1 top-4 ][ w-[25px] h-[25px] ][ my-auto ]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path fill="#7b7d7e" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/>
                </svg>
            </div>
            <div className='[ profile-options ][ flex flex-col ][ h-auto ]'>
                <ProfileModalOption text='Account Setting' img={(<svg className='[ svg ][ h-[23px] w-[23px] ][ my-auto ]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill='#7b7d7e' d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>)} />
                <ProfileModalOption text='Orders' img={(<svg className='[ svg ][ h-[23px] w-[23px] ][ my-auto ]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill='#7b7d7e' d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>)} />
                <ProfileModalOption text='Help Center' img={(<svg className='[ svg ][ h-[23px] w-[23px] ][ my-auto ]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill='#7b7d7e' d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>)} />
            </div>
            <div onClick={logout} className='[ log-out-section ][ bg-white ][ flex flex-row ][ border-t-2 ][ w-full h-[50px] ][ px-[10px] ][ hover:bg-[#f5f5f5] ]'>
                <svg className='[ log-out-img ][ h-[25px] w-[25px] ][ my-auto ]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill='#7b7d7e' d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                <p className="[ log-out-txt ][ my-auto ][ ml-[30px] ][ text-[18px] text-[#7b7d7e] font-semibold font-['Poppins',sans-serif] ]">Log Out</p>
            </div>
        </div>
        
    );   
}

export default ProfileModal;