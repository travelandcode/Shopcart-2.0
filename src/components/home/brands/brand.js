function Brand(props){
    const title = props.title
    const img = props.img
    const deliveryTime = props.deliveryTime
    return(
        <div className="[ brand ][ bg-[#E8E8E8] ][ w-[302px] h-[112px] phone:w-[160px] phone:h-auto tablet:w-auto ][ p-[20px] phone:p-[10px] ][ border border-solid border-[#f5f6f6] ][ rounded-[10px] ][ flex flex-row phone:flex-col ][ hover:border-[#003d29] ]">
            <img src={img} className="[ brand-img ][ mr-[18px] ][ phone:w-[60px] phone:h-[60px] ][ transition-transform hover:scale-[1.2] ][ phone:mb-[5px] ]" alt="brand"/>
            <div className="[ brand-content ][ flex flex-col ]">
                <h3 className="[ brand-title ][ text-[18px] phone:text-[14px] font-semibold font-[Inter,sans-serif] ][ mb-[13px] phone:mb-[3px] ][ text-left ]">{title}</h3>
                <p className="[ brand-delivery-time ][ leading-[13px] text-[13px] font-medium phone:text-left phone:text-[10px] ]">{deliveryTime}</p>
            </div>
        </div>
    );
}

export default Brand;