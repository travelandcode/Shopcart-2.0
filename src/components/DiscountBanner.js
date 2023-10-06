function DiscountBanner(){

    return(
        <div className="[ discount-banner ][ w-screen h-screen ][ bg-discount-background bg-no-repeat bg-cover ][ flex ][ scale-[1] ]">
            <div className="[ discount-container ][ mx-auto my-auto ][ px-[40px] ][ w-[1360px] h-[482px] ][ flex justify-end ] ">
                <div className="[ discount-content ][ bg-[#003d29] ][ flex flex-col ][ w-[513px] h-full ][ py-[75px] px-[64px] ]">
                    <h3 className="[ discount-title ][ mb-3 ][ text-[52px] leading-[120%] text-left text-[#fff] font-semibold ]">Get 5% Cash Back On $200</h3>
                    <p className="[ discount-paragraph ][ text-left ][ text-[20px] leading-[145%] text-[#fff] ][ mb-[50px] ]">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <div className="[ learn-container ][ border border-solid border-[#fff] rounded-[50px] ][ w-[170px] h-[60px] ][ py-[16px] px-[36px] ][ hover:bg-[#231f1e] hover:border-[#231f1e]">
                        <p className="[ learn-txt ][ text-[#fff] font-semibold text-[18px] leading-[24px] ][ mx-auto my-auto ]">Learn More</p> 
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiscountBanner;