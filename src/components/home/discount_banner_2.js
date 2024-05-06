
function DiscountBanner2(){
    return(
        <div className="[ discount-banner-2 ][ w-auto h-[330px] phone:h-auto tablet:h-auto ][ bg-[#ffe6cc] ][ mb-[80px] phone:mb-[20px] tablet:mb-[20px] ]">
            <div className="[ discount-banner-2-container ][ flex flex-row ][ relative ][ justify-between ][ w-[1360px] h-full phone:w-[320px] tablet:w-[720px] ][ px-[40px] phone:px-[20px] tablet:px-[20px] ][ mx-auto ][ overflow-hidden ]">
                <div className="[ discount-banner-2-content ][ justify-between ][ flex flex-row ][ w-full h-full ][ py-[62px] pt-[60px] pb-[40px] ][ my-auto ]">
                    <div className="[ discount-banner-2-txt ][ flex flex-col ]">
                        <h2 className="[ discount-banner-2-title ][ text-[52px] font-bold text-[#231f1e] phone:text-[20px] tablet:text-[35px] phone:text-left ][ mb-[18px] phone:mb-[10px] ]">Get 5% Cash Back</h2>
                        <p className="[ discount-banner-2-par ][ text-[20px] leading-[145%] font-medium text-[#231f1e] text-left ][ mb-[30px] phone:mb-[20px] ]">on Shopcart.com</p>
                        <div className="[ learn-container ][ bg-[#003d29] ][ border border-solid border-[#003d29] rounded-[50px] ][ w-[170px] h-[55px] phone:w-[140px] phone:h-[41.6px] ][ py-[16px] px-[36px] phone:py-[8px] phone:px-[18px] ][ hover:bg-[#231f1e] hover:border-[#231f1e] ]">
                            <p className="[ learn-txt ][ text-[18px] phone:text-[14px] leading-[24px] font-semibold text-[#fff] ][ mx-auto my-auto ]">Learn More</p>
                        </div>
                    </div>
                    <div className="[ shop-cart-cards ][ relative ][ w-[303px] h-[166px] phone:w-[100px] phone:h-[80px] tablet:w-[180px] tablet:h-[140px] ][ mt-[40px] ][ z-0 ]">
                        <div className="[ card-one ][ absolute ][ -left-[22px] -top-[37px] ][ z-[2] ][ -rotate-[30.6deg] ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"/>
                        </div>
                        <div className="[ card-two ][ absolute ][ -left-[6px] -top-[18px] ][ z-[1] ][ -rotate-[21.6deg] ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png"/>
                        </div>
                        <div className="[ card-three ][ absolute ][ -rotate-[15deg] ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg"/>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default DiscountBanner2;
