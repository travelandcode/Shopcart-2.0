function Brand(props){
    const title = props.title
    const img = props.img
    const deliveryTime = props.deliveryTime
    return(
        <div className="[ brand ][ bg-[#f5f6f6] ][ w-[302px] h-[112px] ][ p-[20px] ][ border border-solid border-[#f5f6f6] ][ rounded-[10px] ][ flex flex-row ][ hover:border-[#003d29] ]">
            <img src={img} className="[ brand-img ][ mr-[18px] ][ transition-transform hover:scale-[1.2] ]"/>
            <div className="[ brand-content ][ flex flex-col ]">
                <h3 className="[ brand-title ][ text-[18px] font-semibold font-[Inter,sans-serif] ][ mb-[13px] ][ text-left ]">{title}</h3>
                <p className="[ brand-delivery-time ][ leading-[13px] text-[13px] font-medium ]">{deliveryTime}</p>
            </div>
        </div>
    );
}

export default Brand;