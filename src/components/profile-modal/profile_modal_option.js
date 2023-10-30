function ProfileModalOption({text,img}){
    return(
        <div className="[ profile-modal-option ][ bg-white ][ flex flex-row ][ w-full h-[50px] ][ px-[10px] ][ hover:bg-[#f5f5f5] ]">
            {img}
            <p className="[ settings-txt ][ my-auto ][ ml-[30px] ][ text-[18px] text-[#7b7d7e] font-semibold font-['Poppins',sans-serif] ]">{text}</p>   
        </div>
    );
}

export default ProfileModalOption;