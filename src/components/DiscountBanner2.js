
function DiscountBanner2(){
    return(
        <div className="[ discount-banner-2 ][ w-screen h-discount-banner-2 ][ bg-discount-banner-2 ][ mb-discount-banner-2 ]">
            <div className="[ discount-banner-2-container ][ flex flex-row ][ relative ][ justify-between ][ w-discount-banner-2-container h-full ][ px-discount-banner-2-container-horizontal ][ mx-auto ][ overflow-hidden ]">
                <div className="[ discount-banner-2-content ][ discount-banner-2-content-flex ][ justify-between ][ flex flex-row ][ w-full h-full ][ py-discount-banner-2-content-vertical pt-discount-banner-2-content-flex-top pb-discount-banner-2-content-flex-bottom ][ my-auto ]">
                    <div className="[ discount-banner-2-txt ][ flex flex-col ]">
                        <h2 className="[ discount-banner-2-title ][ text-discount-banner-2-title ][ mb-discount-banner-2-title-margin ]">Get 5% Cash Back</h2>
                        <p className="[ discount-banner-2-par ][ text-discount-banner-2-par text-left ][ mb-discount-banner-2-par-margin ]">on Shopcart.com</p>
                        <div className="[ learn-container ][ bg-learn-btn-2 ][ border border-solid border-learn-btn-2 rounded-learn-btn ][ w-learn-btn h-learn-btn-2 ][ py-learn-container-vertical px-learn-container-horizontal ][ hover:bg-after-learn-btn hover:border-after-learn-btn ]">
                            <p className="[ learn-txt ][ text-learn-txt ][ mx-auto my-auto ]">Learn More</p>
                        </div>
                    </div>
                    <div className="[ shop-cart-cards ][ relative ][ w-shop-cart-cards h-shop-cart-cards ][ mt-shop-cart-cards ][ z-0 ]">
                        <div className="[ card-one ][ absolute ][ -left-card-one-left -top-card-one-top ][ z-card-one ][ -rotate-card-one ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"/>
                        </div>
                        <div className="[ card-two ][ absolute ][ -left-card-two-left -top-card-two-top ][ z-card-two ][ -rotate-card-two ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png"/>
                        </div>
                        <div className="[ card-three ][ absolute ][ -rotate-card-three ]">
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg"/>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default DiscountBanner2;
