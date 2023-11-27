import { faMinus, faPlus, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../../providers/cart_provider';
import { useProduct } from '../../providers/product_provider';

function CartProduct({id}){
    const { storeProducts } = useProduct()
    const products = storeProducts
    const { getProductQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity } = useCart()
    const product = products.find(item => item.id === id)
    if(product === null) return null
    
    const quantity = getProductQuantity(product.id)
    const cost = product.price * quantity
    const img = !product.img_src.includes("https") ? require("../../assets/"+product.img_src) : product.img_src


    return(
        <div className="[ cart-product ][ flex flex-row ][ relative ][ py-[20px] ][ border-t-2 border-solid border-[#DCDCDC] ]">
            <div className="[ cart-product-img-container ][ h-[200px] w-[200px] ][ bg-[#D3D3D3] ][ rounded-[10px] ]">
                <img className="[ cart-product-img ][ my-auto mx-auto ][[ w-[90%] h-[90%] ]" src={img} />
            </div>
            <div className="[ cart-product-section ][ ml-[20px] ]">
                <p className="[ cart-product-name ][ font-[Roboto] text-[20px] ][ mt-[80px] ]">{product.name}</p>
                <div className='[ cart-price-line ][ flex flex-row ][ mt-[10px] ]'>
                    <p className='[ font-[Roboto] text-left text-[16px] text-[#888888] ]'>${parseFloat(product.price).toFixed(2)}</p>
                    <div className='[ stock-txt ][ ml-[5px] ][ pl-[5px] ][ border-l-2 border-solid border-[#DCDCDC] ][ text-[#00ba34] font-semibold ]'>In Stock</div>
                </div>
                <div className='[ item-counter ][ flex flex-row ][ mt-[20px] ][ py-[3px] px-[7px] ][ w-[100px] h-[35px] ][ rounded-[10px] ][ border-2 border-solid border-[#DCDCDC] ]'>
                    <button><FontAwesomeIcon onClick={() => decreaseCartQuantity(id)} className='[ my-auto ][ cursor-pointer ]' icon={faMinus} style={{color: "#969696",}} /></button>
                    <p className='[ item-counter-txt ][ mx-auto ][ font-[Roboto] text-[#888888] text-[18px] ]'>{quantity}</p>
                    <button><FontAwesomeIcon onClick={() => increaseCartQuantity(id)} className='[ my-auto ][ cursor-pointer ]' icon={faPlus} style={{color: "#969696",}} /></button>
                </div>
            </div>
            <div className="[ cart-product-price-container ][ justify-between ][ flex flex-col ][ h-[200px] w-[150px] ][ absolute ][ right-0 rounded-[10px] ]">
                <p className='[ price-txt ][ text-right text-[22px] font-[Pacifico] ]'>${parseFloat(cost).toFixed(2)}</p>
                <div className='[ button-section ][ flex flex-row ][ justify-between ]'>
                    <div className='[ save-btn-section ][ flex flex-row ]' >
                        <FontAwesomeIcon className='[ my-auto ]' icon={faHeart} style={{color: `#888888`,}} />
                        <p className='[ save-txt ][ ml-[4px] ][ my-auto ][ text-[#888888] ]'>Save</p>
                    </div>
                    <button className='[ delete-btn-section ][ flex flex-row ] ' onClick={() => removeFromCart(id)}>
                        <FontAwesomeIcon className='[ my-auto ]'  icon={faTrash} style={{color: "#888888",}} />
                        <p className='[ delete-txt ][ ml-[4px] ][ my-auto ][ text-[#888888] ]'>Delete</p>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CartProduct;