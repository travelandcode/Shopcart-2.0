function Brand(props){
    const title = props.title
    const img = props.img
    const deliveryTime = props.deliveryTime
    return(
        <div className="[ brand ][ bg-brand ][ w-brand h-brand ][ p-brand ][ border border-solid border-brand-border ][ rounded-brand-border ][ flex flex-row ][ hover:border-after-brand-border ]">
            <img src={img} className="[ brand-img ][ mr-brand-img-margin ][ transition-transform hover:scale-brand-image ]"/>
            <div className="[ brand-content ][ flex flex-col ]">
                <h3 className="[ brand-title ][ text-brand-title font-brand-title ][ mb-brand-title ][ text-left ]">{title}</h3>
                <p className="[ brand-delivery-time ][ text-brand-delivery-time ]">{deliveryTime}</p>
            </div>
        </div>
    );
}

export default Brand;