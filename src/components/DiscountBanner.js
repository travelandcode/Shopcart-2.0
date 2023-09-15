function DiscountBanner(){

    return(
        <div className="[ discount-banner ][ w-full h-screen ][ bg-discount-background bg-no-repeat bg-cover ][ flex ][ scale-1 ]">
            <div className="[ discount-container ][ mx-auto my-auto ][ px-discount-horizontal ][ w-discount-container h-discount-container ][ flex justify-end ] ">
                <div className="[ discount-content ][ bg-discount-content ][ flex flex-col ][ w-discount-content h-full ][ py-discount-content-vertical px-discont-content-horizontal ]">
                    <h3 className="[ discount-title ][ mb-3 ][ text-discount-title text-left text-discount-title-txt ][ font-discount-title ]">Get 5% Cash Back On $200</h3>
                    <p className="[ discount-paragraph ][ text-left ][ text-discount-body ][ mb-discount-body ]">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <div className="[ learn-container ][ border border-solid border-learn-btn rounded-learn-btn ][ w-learn-btn h-learn-btn ][ py-learn-container-vertical px-learn-container-horizontal ][ hover:bg-after-learn-btn hover:border-after-learn-btn ]">
                        <p className="[ learn-txt ][ text-learn-txt ][ mx-auto my-auto ]">Learn More</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiscountBanner;