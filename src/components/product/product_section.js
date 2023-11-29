import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBox } from '@fortawesome/free-solid-svg-icons';
import { useProduct } from '../../providers/product_provider';
import { useState } from 'react';
import { useCart } from '../../providers/cart_provider';

function ProductSection({id}){
    const productId = parseInt(id)
    const { storeProducts } = useProduct()
    const product = storeProducts.find(item => item.id === productId)
    const [count,setCount] = useState(0)
    const handleCount = (num) =>{
        setCount(num)
    }

    const { increaseCartQuantity } = useCart()

    return(
        <div className="[ product-section ][ flex flex-row ][ h-[620px] w-screen ][ py-[40px] px-[80px] ]">
            <div className='[ product-img-container ][ flex flex-col ][ w-auto h-auto ][ rounded-[10px] ]'>
                <img className="[ product-img ][ w-[350px] h-[350px] ][ mx-auto my-auto ]" src={product.img_src[count]} />
                <div className="[ flex flex-row ][ w-auto ][ mt-[30px] ]">
                    <img onClick={() => handleCount(0)} className="[ product-img ][ w-[150px] h-[150px] ][ border-[2px] border-solid rounded-[10px] ][ mx-auto  my-auto ][ cursor-pointer ]" src={product.img_src[0]} />
                    <img onClick={() => handleCount(1)} className="[ product-img ][ w-[150px] h-[150px] ][ border-[2px] border-solid rounded-[10px] ][ mx-auto  my-auto ml-2 ][ cursor-pointer ]" src={product.img_src[1]} />
                    <img onClick={() => handleCount(2)} className="[ product-img ][ w-[150px] h-[150px] ][ border-[2px] border-solid rounded-[10px] ][ mx-auto  my-auto ml-2 ][ cursor-pointer ]" src={product.img_src[2]} />
                </div>
            </div>
            <div className="[ product-information ][ w-[450px] ][ ml-[300px] ]">
                <p className="[ product-name-[ font-[Lobster] text-[24px] text-[#404040] text-left ][ mb-[10px] ]">{product.name}</p>
                <p className="[ product-description ][ text-left flex-wrap font-[Roboto] text-[#404040] ][ mb-[15px] ]">{product.description}</p>
                <div className="[ product-ratings ][ flex flex-row ][ mb-[30px] ]">
                    <div className="[ ratings ][ flex flex-row ]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                    </div>
                    <div className="[ total-ratings ][ ml-[5px] text-[15px] text-[#404040] leading-[100%] font-medium ]">
                        (121)
                    </div>
                </div>
                <div className="[ product-price ][ font-[RussoOne] text-left text-[30px] text-[#404040] ]">
                    ${parseFloat(product.price).toFixed(2)} or ${parseFloat((product.price+product.price*0.2)/6).toFixed(2)}/month
                </div>
                <p className="[ suggested-txt ][ font-[Roboto] text-[#404040] text-left text-[12px] ][ mb-[20px] ]">Suggested payments with 6 months special financing</p>
                <div className="[ button-container ][ flex flex-row ]">
                    <button className="[ buy-now-btn ][ w-[200px] h-[50px] ][ rounded-[50px] ][ bg-[#003d29] text-white ][ flex ][ mr-[20px] ]">
                        <p className="[ buy-now-txt ][ mx-auto my-auto ][ text-[14px] font-semibold ] ">Buy Now</p>
                    </button>
                    <button onClick={()=>{increaseCartQuantity(product.id)}} className="[ add-to-cart-btn ][ w-[200px] h-[50px] phone:w-[100px] ][ rounded-[50px] ][ bg-[#FFA33C] ][ flex ]">
                        <p className="[ add-to-cart-txt ][ mx-auto my-auto ][ text-[14px] text-white font-semibold ] ">Add to Cart</p>
                    </button>
                </div>
                <div className="[ delivery ][ flex flex-col ][ mt-[30px] ][ mb-[5px] ]">
                    <div className="[ flex flex-row ]">
                        <FontAwesomeIcon className='[ w-[35px]  h-[35px] ]' icon={faTruck} style={{color: "#ffa33c"}} />
                        <div  className="[ flex flex-col ]">
                            <p className="[ delivery-txt ][ font-[RussoOne] text-[#404040] text-[18px] my-auto ][ ml-4 ]">Delivery</p>
                        </div>
                    </div>
                    <p className="[ text-left font-[Roboto] text-[#404040] text-[14px] ]">Free Delivery on orders over $49</p>
                </div>
                <div className="[ delivery ][ flex flex-col ][ mt-[20px] ]">
                    <div className="[ flex flex-row ][ mb-[5px] ]">
                        <FontAwesomeIcon className='[ w-[35px]  h-[35px] ]' icon={faBox} style={{color: "#ffa33c"}} />
                        <div  className="[ flex flex-col ]">
                            <p className="[ delivery-txt ][ font-[RussoOne] text-[#404040] text-[18px] my-auto ][ ml-4 ]">Returns</p>
                        </div>
                    </div>
                    <p className="[ text-left font-[Roboto] text-[#404040] text-[14px] ]">Enjoy hassle-free returns for any reason within 30 days,<br/> and we cover all shipping charges</p>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;