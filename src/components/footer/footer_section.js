import PaymentOptions from "../../constants/payment_options.json"
import FooterPaymentOptions from "./footer_payment_option"
import Columns from '../../constants/columns.json'
import FooterColumn from './footer_column'

function Footer(){
    const paymentOptions = PaymentOptions
    const columns = Columns
    return(
        <div className="[ footer ][ h-[637px] w-[1360px] phone:w-screen phone:h-[530px] ][ flex flex-col ][ mx-auto ][ px-[40px] phone:px-[10px] ][ overflow-hidden ]">
            <div className="[ footer-top ][ pt-[60px] phone:py-[20px] ][ pb-[30px] ][ border-y border-solid border-[#231f1e33] ]">
                <div className="[ footer-columns ][ items-start ][ h-[447px] phone:h-auto ][ grid grid-flow-col gap-[16px] ]">
                    <div className="[ footer-content ][ w-[538px] phone:w-screen  h-[318px] phone:h-auto ][ mb-[30px] phone:mb-[15px] ][ flex flex-col ]">
                        <img src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" className="[ shopcart-img ][ flex ][ w-[175px] h-[44px] ][ items-start ][ mb-[35px] ]"/>
                        <p className="[ footer-paragraph ][ text-[15px] text-[#231f1e] text-left font-sans leading-[150%] font-medium ][ w-[385px] ][ mb-[40px] phone:mb-[15px] ]">
                        ShopCart - Where Convenience Meets Choice! Explore endless options and discover unbeatable deals on our user-friendly e-commerce platform. Your online shopping journey begins here.
                        </p>
                        <div className="[ footer-payment-wrapper ][ w-full h-[135px] ]">
                            <h2 className="[ payments-title ][ text-[18px] font-semibold text-[Inter,sans-serif] text-left ][ mb-[23px] ]">Accepted Payments</h2>
                            <div className="[ footer-payment ][ grid grid-rows-2 grid-flow-col gap-x-[6px] gap-y-[10.34px] auto-cols-min grid-cols-[58px,58px,58px,58px] ]">
                                {paymentOptions.map(paymentOption =>(
                                    <FooterPaymentOptions img={paymentOption.img} />))}
                            </div>
                        </div>
                    </div>
                    {
                        columns.map(column =>(
                            <FooterColumn columnName={column.columnName} items={column.items} />)
                        )
                    }
                </div>
            </div>
            <div className="[ copyright-content ][ h-[100px] phone:h-auto tablet:h-auto ][ flex phone:flex-col tablet:flex-col ][ py-[33px] phone:py-[5px] tablet:py-[10px] ][ justify-between phone:justify-normal ] ">
                <div className="[ left-menu ][ flex flex-row ][ h-[25px] phone:w-auto phone:h-auto phone:mt-[15px] phone:mx-auto ]">
                    <div className="[ seller-block ][ flex flex-row phone:flex-col  ][ mr-[40px] phone:mr-[20px] ][ justify-center ]">
                        <img className="[ seller-img ][ w-[24px] h-[25px] phone:h-auto phone:w-auto  ][ mr-[8px] phone:mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg" />
                        <p className="[ seller-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium phone:text-left ][ hover:text-[#ff5c4c] ]">Become Seller</p>
                    </div>
                    <div className="[ gift-block ][ flex flex-row phone:flex-col  ][ mr-[40px] phone:mr-[20px] ][ justify-center ]">
                        <img className="[ gift-img ][ w-[24px] h-[25px] phone:h-auto phone:w-auto ][ mr-[8px] phone:mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg" />
                        <p className="[ gift-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium phone:text-left ][ hover:text-[#ff5c4c] ]">Gift Cards</p>
                    </div>
                    <div className="[ help-block ][ flex flex-row phone:flex-col  ][ mr-[40px] phone:mr-[20px] ][ justify-center ]">
                        <img className="[ help-img ][ w-[24px] h-[25px] phone:h-auto phone:w-auto  ][ mr-[8px] phone:mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg" />
                        <p className="[ help-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium phone:text-left ][ hover:text-[#ff5c4c] ]">Help Center</p>
                    </div>
                </div>
                <div className="[ copyright-menu ][ flex flex-row ][ phone:w-[250px] phone:mx-auto phone:justify-between phone:mt-[10px] tablet:mt-[10px] phone:text-left phone:mb-[2px]  ]">
                    <p className="[ terms-txt ][ text-[14px] text-[#0e0f18]  leading-[32px] font-medium ][ hover:text-[#ff5c4c] ]">Terms of Service</p>
                    <p className="[ privacy-txt ][ text-[14px] text-[#0e0f18]  leading-[32px] font-medium ][ ml-[40px] phone:ml-0 tablet:ml-[10px] ][ hover:text-[#ff5c4c] ]">Privacy & Policy</p>
                </div>
                <p className="[ copyright-txt ][ text-[14px] leading-[140%] text-center font-medium phone:text-left phone:mx-auto tablet:text-left ]">All Right reserved by Ryon Walker | 2023</p>
            </div>
        </div>
    );
}

export default Footer;