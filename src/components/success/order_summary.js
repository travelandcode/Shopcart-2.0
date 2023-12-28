import { useProduct } from "../../providers/product_provider";

function OrderSummary({product}){
    const { storeProducts } = useProduct()
    const storeProduct = storeProducts.find((item) => product.id === item.id)
    return(
        <div className="[ placed-orders ][ flex flex-row ][ flex ][ justify-evenly ]">
            <div className="[ img-container ][ w-[100px] h-[100px] ]">
                <img className="[ mx-auto ]" src={storeProduct.img_src[0]} />
            </div>
            <p className="[ order-name ][ text-[20px] font-[Roboto] ][ my-auto ]">{storeProduct.name}</p>
            <p className="[ order-name ][ text-[20px] font-[Pacifico] ][ flex ][ justify-self-end ][ my-auto ]">${storeProduct.price * product.quantity}</p>                      
        </div>
    );
}

export default OrderSummary;