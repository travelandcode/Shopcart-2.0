import CartProducts from "./cart_products";
import CartTotal from "./cart_total";

function CartSection(){
    return(
        <div className="[ cart-section ][ flex flex-row ][ mt-[40px] h-screen ][ px-[80px] ]">
            <div className="[ cart-products-section ]">
            
            </div>
            <CartTotal />
        </div>
    );
}

export default CartSection;