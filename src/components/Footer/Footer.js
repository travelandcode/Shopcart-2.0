import PaymentOptions from "../../constants/paymentOptions.json"
import FooterPaymentOptions from "./FooterPaymentOptions"
import Columns from '../../constants/columns.json'
import FooterColumn from './FooterColumn'

function Footer(){
    const paymentOptions = PaymentOptions
    const columns = Columns
    return(
        <div className="[ footer ][ h-[637px] w-[1376px] ][ flex flex-col ][ mx-auto ][ px-[40px] ][ overflow-hidden ]">
            <div className="[ footer-top ][ pt-[60px] ][ pb-[30px] ][ border-y border-solid border-[#231f1e33] ]">
                <div className="[ footer-columns ][ items-start ][ h-[447px] ][ grid grid-flow-col gap-[16px] ]">
                    <div className="[ footer-content ][ w-[538px]  h-[318px] ][ mb-[30px] ][ flex flex-col ]">
                        <img src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" className="[ shopcart-img ][ flex ][ w-[175px] h-[44px] ][ items-start ][ mb-[35px] ]"/>
                        <p className="[ footer-paragraph ][ text-[15px] text-[#231f1e] text-left font-[Inter,Sans-serif] leading-[150%] font-light ][ w-[385px] ][ mb-[40px] ]">
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
            <div className="[ copyright-content ][ h-[100px] ][ flex ][ py-[33px] ][ justify-between ] ">
                <div className="[ left-menu ][ flex flex-row ][ h-[25px] ]">
                    <div className="[ seller-block ][ flex flex-row ][ mr-[40px] ][ justify-center ]">
                        <img className="[ seller-img ][ w-[24px] h-[25px] ][ mr-[8px] ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6e927bdf5bc4309e0_briefcase.svg" />
                        <p className="[ seller-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium ][ hover:text-[#ff5c4c] ]">Become Seller</p>
                    </div>
                    <div className="[ gift-block ][ flex flex-row ][ mr-[40px] ][ justify-center ]">
                        <img className="[ gift-img ][ w-[24px] h-[25px] ][ mr-[8px] ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6c4510c256356f4cd_gift.svg" />
                        <p className="[ gift-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium ][ hover:text-[#ff5c4c] ]">Gift Cards</p>
                    </div>
                    <div className="[ help-block ][ flex flex-row ][ mr-[40px] ][ justify-center ]">
                        <img className="[ help-img ][ w-[24px] h-[25px] ][ mr-[8px] ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb0ed6ae57fd74e0402aa4_help-circle.svg" />
                        <p className="[ help-txt ][ my-auto ][ text-[15px] text-[#231f1e] leading-[140%] font-medium ][ hover:text-[#ff5c4c] ]">Help Center</p>
                    </div>
                </div>
                <div className="[ copyright-menu ][ flex flex-row ]">
                    <p className="[ terms-txt ][ text-[14px] text-[#0e0f18]  leading-[32px] font-medium ][ hover:text-[#ff5c4c] ]">Terms of Service</p>
                    <p className="[ privacy-txt ][ text-[14px] text-[#0e0f18]  leading-[32px] font-medium ][ ml-[40px] ][ hover:text-[#ff5c4c] ]">Privacy & Policy</p>
                </div>
                <p className="[ copyright-txt ][ text-[14px] leading-[140%] text-center font-medium ]">All Right reserved by Ryon Walker | 2023</p>
            </div>
        </div>
    );
}

export default Footer;