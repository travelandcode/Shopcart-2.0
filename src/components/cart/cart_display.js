import { useCart } from "../../providers/cart_provider";
import { useProduct } from "../../providers/product_provider";
import CartProduct from "./cart_product";
import WomanInCart from '../../assets/woman-in-shopping-cart.png'
import {motion} from 'framer-motion'

function CartDisplay(){
    const { cartProducts } = useCart()
    const { storeProducts } = useProduct()

    return(
        <div className="[ cart-products-section ][ flex flex-col ][ px-[20px] py-[20px] ][ w-auto h-screen ][ z-[1] ]">
            <p className={`[ cart-txt ][ text-left text-[28px] font-[Lobster] text-[#404040] ][ mb-[10px] ][ ${cartProducts.length === 0 ? 'mx-auto text-[36px]' : ''} ]`}>{cartProducts.length === 0 ? "Your ShopCart Basket is Empty" : "Your Shopcart"}</p>
            <div className="[ cart-products ][ flex flex-col ]">
                {
                    cartProducts.length === 0 ?

                    <div className="[ empty-cart-container ][ flex flex-col ]">
                        <img  className={`[ woman-in-cart-img ][ max-w-[500px] ]`} src={WomanInCart} alt="Woman in Cart"/>
                        <p className="[ text-[24px] font-[Lobster] text-[#404040] ]">"Fill Your Cart with Joy: Shop What Brightens Your Day!"</p>
                        <motion.a href="/home"  whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}} className="[ bg-[#FFA33C] ][ w-[500px] h-[75px] ][ mx-auto mt-[20px] ][ text-white text-[24px] font-sans font-bold ][ rounded-[15px] ][ border-2 border-solid ][ shadow-lg ][ flex ]"><p className="[ mx-auto my-auto ]">Add to Your Shopcart</p></motion.a>
                    </div>
                    
                    
                    : cartProducts.map(product => (
                        <CartProduct key={product.id} id={product.id} products={storeProducts} />
                    ))
                }
            </div>
        </div>
    );
}

export default CartDisplay;