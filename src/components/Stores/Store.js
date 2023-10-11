
function Store(props){
    const img = props.img
    const brandName = props.brandName
    const brandImg = props.brandImg
    return (
        <div className="[ store ][ bg-[#f5f6f6] ][ h-[375px] w-[302px] phone:w-[160px] phone:h-[220px] ][ mx-auto ][ relative ][ z-0 ][ rounded-[10px] ][ flex flex-col ]">
            <div className="[ store-img-container ][ rounded-[10px] ][ overflow-hidden ]">
                <img className="[ store-img ][ w-full h-[240px] phone:h-[127.6px] ][ transition-transform hover:scale-[1.2] ][ rouned-[10px] ]" src={img}/>
            </div>
            <div className="[ store-content ][ relative ][ z-[99] ][ mt-[-29px] ][ px-[20px] phone:px-[10px] ]">
                <img className="[ brand-img ][ mb-[10px] phone:mb-[5px] ][ w-[62px] h-[62px] phone:w-[50px] phone:h-[50px] ]" src={brandImg}/>
                <h3 className="[ brand-name ][ text-[#231f1e] text-[18px] phone:text-[14px] text-left font-bold ][ font-[Inter,sans-serif] ]">{brandName}</h3>
                <div className="[ store-category-container ][ flex flex-row ][ mb-2 phone:mb-1 ][ items-center ]">
                    <p className="[ store-category ][ text-[12px] phone:text-[10px] text-[#848181] font-medium ]">Bag</p>
                    <div className="[ dot ][ w-1 h-1 ][ ml-1 mr-1 ][ rounded-[100px] ][ bg-[#848181] ]"></div>
                    <p className="[ store-category ][ text-[12px] phone:text-[10px] text-[#848181] ][ font-medium ]">Perfume</p>
                </div>
                <div className="[ delivery-container ][ flex flex-row ][ items-center ]">
                    <img className="[ delivery-img ][ w-[13px] h-[13px] phone:w-[11px] phone:h-[11px] ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png"  />
                    <p className="[ delivery-description ][ ml-2 ][ text-[#C34482] text-[12px] phone:text-[10px] leading-[160%] ]">Delivery within 24 hours</p>
                </div>
            </div>
        </div>
    );
}

export default Store;