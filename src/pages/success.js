import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../providers/cart_provider';
import OrderSummary from '../components/success/order_summary';
import { useProduct } from '../providers/product_provider';
import { useHistory } from 'react-router-dom'


function Success(){
    const { cartProducts, clearClart } = useCart()
    const { storeProducts } = useProduct()
    const subTotal = cartProducts.reduce((total, cartItem) => {
        const item = storeProducts.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
      }, 0)
    const history = useHistory()
    const handleSubmit = () =>{
        clearClart()
        history.push('/')
    }
    return(
        <div className="[ success ][ w-screen h-screen px-[20px] ][ bg-[#f7f7f7] ][ flex flex-col ]">
            <div className="[ payment-success-section ][ mx-auto my-auto ]">
                <FontAwesomeIcon className="[ w-[75px] h-[75px] ]" icon={faCircleCheck} style={{color: "#00ba34",}} />
                <div className="[ payment-section ][ mt-[10px] ]">
                    <p className="[ thank-you-txt ][ text-[45px] font-[Lobster] text-[#404040] ]">Thank you for shoppinng with us!</p>
                    <p className="[ order-txt ][ text-[25px] font-[Roboto] text-[rgb(64,64,64)] ]">Your order has been placed!</p>
                    <p className="[ order-num-txt ][ text-[35px] font-[Roboto] text-[#404040] ][ mt-[10px] ]">Your order# is: 500008458</p>
                    <p className="[ order-num-txt ][ text-[20px] font-[Assistant] text-[#404040] ]">You will receive an order confirmation email with details of your order.</p>
                </div>
                <div className="[ order-summary-section ][ my-auto ][ w-[1150px] ]">
                    <p className="[ order-summary-title ][ font-[Lobster] text-left text-[#404040] text-[30px] ][ mt-[50px] ml-[175px] ]">Order Summary</p>
                    {
                        cartProducts.map((product) => 
                            <OrderSummary product={product} total={subTotal} />
                        )
                    }
                </div>
                <div className="[ subtotal-section ][ w-[790px] ][ mx-auto mt-[10px] ][ flex ][ justify-between ]">
                    <p className="[ subtotal-label ][ font-[Lobster] text-left text-[#404040] text-[30px] ]">SubTotal</p>
                    <p className="[ subtotal-txt ][ font-[Pacifico] text-left text-[#404040] text-[30px] ]">${subTotal}</p>

                </div>
                <button onClick={() => handleSubmit()}  className='[ continue-btn ][ w-[400px] h-[35px] ][ bg-[#FFA33C] hover:bg-[#F3B664] ][ rounded-[5px] ][ cursor-pointer ][ mt-[30px] ]'>
                    <p className='[ continue-txt ][ mt-[3px] ][ text-[18px] text-white font-[Lobster] ]'>Continue Shopping</p>
                </button>
            </div>
            
        </div>

    );
}

export default Success;