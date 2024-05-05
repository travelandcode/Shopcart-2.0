import CartDisplay from "./cart_display";
import CartTotal from "./cart_total";

function CartSection(){

    return(
        <div className="[ cart-section ][ flex flex-row ][ mt-[20px] mb-[40px] ][ px-[80px] ][ mx-auto ]">
            <CartDisplay />
            <CartTotal />
        </div>
    );
}

export default CartSection;