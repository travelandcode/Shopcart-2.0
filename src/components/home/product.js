//function should take in product name, price, description, and image
function Product(props){
    const name = props.name
    const price = props.price
    const img_src = props.img
    const description = props.description
    let img = '';

    !img_src.includes("https") ? img = require("../../images"+img_src) : img = img_src

    return (
        <div className="[ product-card ][ h-[446px] w-[410px] phone:w-[150px] phone:h-auto tablet:w-[300px] ][ mx-auto ][ flex flex-col ]">
            <div className="[ product-container ][ bg-[#f5f6f6] ][ rounded-[10px] ][ relative ][ phone:h-1/2 ] ">
                    <img className="[ product-img  ][ phone:h-[120px] phone:w-[120px] ][ mx-auto my-auto ][ transition-transform hover:scale-[1.2] ]" src={img} loading="lazy"/>
                <div className="[ product-wishlist ][ h-[40px] w-[40px] phone:h-[30px] phone:w-[30px] ][ rounded-full ][ flex absolute ][ top-[16px] right-[16px] phone:top-[10px] phone:right-[10px] ][ bg-[#fff] hover:bg-[#f9dcdc] ]">
                    <svg className="[ wishlist-icon ][ mx-auto my-auto ][ h-[17px] w-[20px] ][ relative ]" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path d="M9.99984 2.15022C12.1593 0.215364 15.4804 0.285555 17.5556 2.36079C19.7035 4.50867 19.7035 7.99108 17.5556 10.139L11.2962 16.3984C10.5802 17.1143 9.41944 17.1143 8.70348 16.3984L2.44408 10.139C0.2962 7.99108 0.2962 4.50867 2.44408 2.36079C4.51932 0.285555 7.84033 0.215364 9.99984 2.15022ZM11.0738 3.65715L10.648 4.08291C10.29 4.44089 9.70964 4.44089 9.35166 4.08291L8.9259 3.65715C7.49397 2.22523 5.17237 2.22523 3.74045 3.65715C2.30852 5.08908 2.30852 7.41068 3.74045 8.8426L9.99984 15.102L16.2592 8.8426C17.6912 7.41068 17.6912 5.08908 16.2592 3.65715C14.8273 2.22523 12.5057 2.22523 11.0738 3.65715Z" fill="#4F4F4F"/>
                    </svg>
                </div>
            </div>
            <div className="[ product-content ][ flex flex-col ][ phone:h-1/2 ][ phone:px-[10px] ]">
                <div className="[ product-title-wrapper ][ flex flex-row ][ justify-between ][ mt-[16px] mb-[12px] phone:mt-[12px] phone:mb-[10px] ]">
                    <h3 className="[ product-title ][ font-[Inter,sans-serif] text-[18px] font-semibold phone:text-[13px] phone:text-left ][ phone:max-w-[75px] phone:overflow-hidden phone:truncate ]">{name}</h3>
                    <div className="[ product-cost ][ font-[Inter,sans-serif] text-[18px] font-semibold phone:text-[13px] ]">
                       {price}
                    </div>
                </div>
                <div className="[ product-description ][ text-[12px] phone:text-left ][ text-[#333] ][ flex ][ mb-[10px] ][ phone:hidden ]">
                    {description}
                </div>
                <div className="[ product-ratings ][ flex flex-row ][ mb-[15px] ]">
                    <div className="[ ratings ][ flex flex-row ]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.45251 7.35337C9.30143 7.49979 9.23201 7.71154 9.26643 7.91921L9.78502 10.7892C9.82876 11.0325 9.7261 11.2786 9.52251 11.4192C9.32301 11.565 9.0576 11.5825 8.84001 11.4659L6.25643 10.1184C6.1666 10.0705 6.06685 10.0449 5.96476 10.042H5.80668C5.75185 10.0501 5.69818 10.0676 5.64918 10.0945L3.06501 11.4484C2.93726 11.5125 2.7926 11.5353 2.65085 11.5125C2.30551 11.4472 2.0751 11.1182 2.13168 10.7711L2.65085 7.90112C2.68526 7.69171 2.61585 7.47879 2.46476 7.33004L0.358348 5.28837C0.182181 5.11746 0.120931 4.86079 0.201431 4.62921C0.279598 4.39821 0.479098 4.22962 0.720015 4.19171L3.61918 3.77112C3.83968 3.74837 4.03335 3.61421 4.13251 3.41587L5.41001 0.796707C5.44035 0.738374 5.47943 0.684707 5.52668 0.639207L5.57918 0.598374C5.6066 0.568041 5.6381 0.542957 5.6731 0.522541L5.73668 0.499207L5.83585 0.458374H6.08143C6.30076 0.481124 6.49385 0.612374 6.59476 0.808374L7.88918 3.41587C7.98251 3.60662 8.16393 3.73904 8.37335 3.77112L11.2725 4.19171C11.5175 4.22671 11.7223 4.39587 11.8033 4.62921C11.8798 4.86312 11.8138 5.11979 11.6342 5.28837L9.45251 7.35337Z" fill="#08AC0A"/>
                        </svg>
                    </div>
                    <div className="[ total-ratings ][ ml-[5px] text-[12px] leading-[100%] font-medium ]">
                        (121)
                    </div>
                </div>
                <div className="[ add-to-cart-btn ][ w-[122px] h-[40px] phone:w-[100px] ][ rounded-[50px] ][ border border-solid border-[#231F1E] ][ hover:bg-[#003d29] hover:text-white ][ flex ]">
                    <p className="[ add-to-cart-txt ][ mx-auto my-auto ][ text-[14px] font-semibold ] ">Add to Cart</p>
                </div>
            </div>
        </div>
    );

}
export default Product;