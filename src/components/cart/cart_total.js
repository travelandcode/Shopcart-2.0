import DeliverySwitch from './delivery_switch';
import { useState } from "react";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartTotal(){
    const [isExpress, setIsExpress] = useState(false);
    const [ deliveryCost, setDeliveryCost ] = useState(0.00);
    const handleExpressChange = (expressValue) => {
        setIsExpress(expressValue);
        handleDeliveryCost(expressValue);
    };
    const handleDeliveryCost = (value) => {
        value ? setDeliveryCost(9.99) : setDeliveryCost(0.00);
    }

    return (
        <div className="[ cart-total ][ flex flex-col ][ px-[20px] py-[20px] ][ rounded-[15px] ][ z-[1] ][ w-[300px] h-[575px] ][ border-2 border-solid border-[#D3D3D3] ][ bg-white ]">
            <p className=" [ delivery-txt ][ text-[20px] text-left ][ mb-[10px] ][ font-[Pacifico] font-normal text-[#404040] ]:">Delivery</p>
            <DeliverySwitch onExpressChange={handleExpressChange} />
            <div className='[ delivery-date-section ][ flex flex-row ][ mb-[30px] ]'>
                <p className='[ delivery-date-label ][ font-[Roboto] ][ mr-[5px] ][ text-[14px] text-[#888888] ]'>Delivery date:</p>
                <p className='[ delivery-date-txt ][ font-[Roboto] ][ text-[14px] text-[#888888] ]'>June 24, 2022</p>
            </div>
            <div className='[ promo-area ][ h-[120px] w-full ][ border-y-2 border-[#BEBEBE] border-dashed ][ py-[20px] ] '>
                <div className='[ promo-code-section ][ w-full h-[40px] ][ border-[2px] border-solid border-[#B8B8B8] ][ rounded-[10px] ][ mb-[5px] ][ flex flex-row ]'>
                    <input className="[ promo-code-input ][ rounded-[10px] ][ w-[75%] ][ px-2 ][ outline-none ][ font-[Lobster] ]" type='text' placeholder="PromoCode" />
                    <div className='[ apply-btn ][ h-full [ w-[25%] ][ rounded-[10px] ][ border-l-[2px] border-solid border-[#B8B8B8] ][ hover:bg-[#DCDCDC] ]'>
                        <p className='[ apply-txt ][ mt-[4px] ][ text-center font-[Lobster] text-[18px] text-[#484848] font-semibold ][ cursor-pointer ]'>Apply</p>
                    </div>
                </div> 
                <p className='[ discount-txt ][ text-left ][ font-[Roboto] ][ text-[14px] text-[#888888] ]'>20% off Discount</p> 
            </div>
            <div className='[ subtotal-section ][ py-[20px] ][ border-b-2 border-[#BEBEBE] border-dashed ]'>
                <div className='[ subtotal-line ][ flex flex-row ][ justify-between ]'>
                    <p className='[ subtotal-label ][ text-[18px] font-[Roboto] text-[#404040] ]'>Subtotal</p>
                    <p className='[ subtotal-txt ][ text-[18px] font-[Pacifico] text-[#404040] ]'>$80.96</p>
                </div>
                <div className='[ discount-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                    <p className='[ discount-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Discount</p>
                    <p className='[ discount-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>$16.19</p>
                </div>
                <div className='[ delivery-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                    <div className='[ delivery-label-section ][ flex flex-row ]'>
                        <p className='[ delivery-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Delivery</p>
                        <FontAwesomeIcon className='[ my-auto ml-1 ]' icon={faCircleInfo} style={{color: "#888888",}} />
                    </div>
                    <p className='[ delivery-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>{`$${deliveryCost}`}</p>
                </div>
                <div className='[ tax-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                <div className='[ tax-label-section ][ flex flex-row ]'>
                        <p className='[ tax-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Tax</p>
                        <FontAwesomeIcon className='[ my-auto ml-1 ]' icon={faCircleInfo} style={{color: "#888888",}} />
                    </div>
                    <p className='[ tax-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>$14.00</p>
                </div>
            </div>
            <div className='[ total-section ][ mt-[15px] ][ flex flex-row ][ justify-between ]'>
                <p className='[ total-label ][ my-auto ][ text-[20px] font-[Roboto] text-[#404040] font-bold ]'>Total</p>
                <p className='[ total-txt ][ my-auto ][ text-[20px] font-[Pacifico] text-[#404040] font-bold ]'>$78.76</p>
            </div>
            <div className='[ proceed-btn ][ w-full h-[35px] ][ bg-[#FFA33C] hover:bg-[#F3B664] ][ rounded-[5px] ][ cursor-pointer ][ mt-[10px] ]'>
                <p className='[ proceed-txt ][ mt-[3px] ][ text-[18px] text-white font-[Lobster] ]'>Proceed To Checkout</p>
            </div>
            <div className='[ continue-btn ][ w-full h-[35px] ][ mt-[10px] ][ cursor-pointer ][ rounded-[5px] ][ border-2 border-solid border-[#D3D3D3] ][ hover:bg-[#DCDCDC] hover:border-[#DCDCDC] ]'>
                <p className='[ continue-txt ][ mt-[3px] ][ text-[18px] text-[#808080] font-[Lobster] ]'>Continue Shopping</p>

            </div>
        </div>
    );
}

export default CartTotal;