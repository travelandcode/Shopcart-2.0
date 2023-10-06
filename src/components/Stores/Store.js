
function Store(props){
    const img = props.img
    const brandName = props.brandName
    const brandImg = props.brandImg
    return (
        <div className="[ store ][ bg-[#f5f6f6] ][ h-[375px] w-[302px] ][ mx-auto ][ relative ][ z-0 ][ rounded-[10px] ][ flex flex-col ]">
            <div className="[ store-img-container ][ rounded-[10px] ][ overflow-hidden ]">
                <img className="[ store-img ][ w-full h-[240px] ][ transition-transform hover:scale-[1.2] ][ rouned-[10px] ]" src={img}/>
            </div>
            <div className="[ store-content ][ relative ][ z-[99] ][ mt-[-29px] ][ px-[20px] ]">
                <img className="[ brand-img ][ mb-[10px] ][ w-[62px] h-[62px] ]" src={brandImg}/>
                <h3 className="[ brand-name ][ text-[#231f1e] text-[18px] text-left font-bold ][ font-[Inter,sans-serif] ]">{brandName}</h3>
                <div className="[ store-category-container ][ flex flex-row ][ mb-2 ][ items-center ]">
                    <p className="[ store-category ][ text-[12px] text-[#848181] font-medium ]">Bag</p>
                    <div className="[ dot ][ w-1 h-1 ][ ml-1 mr-1 ][ rounded-[100px] ][ bg-[#848181] ]"></div>
                    <p className="[ store-category ][ text-[12px] text-[#848181] ][ font-medium ]">Perfume</p>
                </div>
                <div className="[ delivery-container ][ flex flex-row ][ items-center ]">
                    <img className="[ delivery-img ][ w-[13px] h-[13px] ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png"  />
                    <p className="[ delivery-description ][ ml-2 ][ text-[#C34482] text-[12px] leading-[160%] ]">Delivery within 24 hours</p>
                </div>
            </div>
        </div>
    );
}

export default Store;