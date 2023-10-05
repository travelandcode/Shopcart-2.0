function FooterPaymentOptions(props){
    const img = props.img
    
    return (
        <div className="[ payment-option ][ flex ][ w-[58px] h-[40px] ][ items-center ][ border-[0.5px] border-solid border-[#d9d9d9] ][ rounded-[5px] ]">
            <img className="[ payment-option-img ][ mx-auto ]" src={img} />
        </div>
    );
}

export default FooterPaymentOptions;