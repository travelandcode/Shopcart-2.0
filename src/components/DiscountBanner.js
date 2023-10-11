function DiscountBanner(){

    return(
        <div className="[ discount-banner ][ w-screen h-screen phone:h-[350px] tablet:h-[700px] ][ bg-discount-background bg-no-repeat bg-cover phone:bg-center ][ flex ][ scale-[1] ]">
            <div className="[ discount-container ][ mx-auto my-auto ][ px-[40px] phone:px-[20px] phone:py-[40px] ][ w-[1360px] h-[482px] phone:h-full phone:w-[360px] tablet:h-auto tablet:w-auto  ][ flex justify-end ] ">
                <div className="[ discount-content ][ bg-[#003d29] ][ flex flex-col ][ w-[513px] h-full phone:w-full ][ py-[75px] px-[64px] phone:px-[30px] phone:py-[30px] ]">
                    <h3 className="[ discount-title ][ mb-3 ][ text-[52px] leading-[120%] text-left text-[#fff] font-semibold phone:text-[32px] ]">Get 5% Cash Back On $200</h3>
                    <p className="[ discount-paragraph ][ text-left ][ text-[20px] leading-[145%] text-[#fff] phone:text-[16px] ][ mb-[50px] phone:mb-[20px] ]">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <div className="[ learn-container ][ border border-solid border-[#fff] rounded-[50px] ][ w-[170px] h-[60px] phone:w-[140px] phone:h-[41.6px] ][ py-[16px] px-[36px] phone:py-[8px] phone:px-[18px] ][ hover:bg-[#231f1e] hover:border-[#231f1e]">
                        <p className="[ learn-txt ][ text-[#fff] font-semibold text-[18px] phone:text-[14px] leading-[24px] ][ mx-auto my-auto ]">Learn More</p> 
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiscountBanner;