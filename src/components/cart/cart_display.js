import { useCart } from "../../providers/cart_provider";
import CartProduct from "./cart_product";

function CartDisplay(){
    const { cartProducts } = useCart()
    return(
        <div className="[ cart-products-section ][ flex flex-col ][ px-[20px] py-[20px] ][ w-[700px] h-auto ][ z-[1] ][ border-2 border-solid border-[#DCDCDC] ][ rounded-[15px] ]">
            <p className="[ cart-txt ][ text-left text-[20px] font-[Pacifico] text-[#404040] ][ mb-[10px] ]">Cart</p>
            <div className="[ cart-products ]">
                {
                    cartProducts.length === 0 ?

                    <div className="[ text-[28px] font-[Lobster] text-[#404040]  ]">Your ShopCart Basket is Empty!</div>
                    
                    : cartProducts.map(product => (
                        <CartProduct id={product.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default CartDisplay;