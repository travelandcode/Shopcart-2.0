import Deal from "./Product";
import { useState } from "react";
import LeftArrow from "../images/left.png"
import RightArrow from "../images/right.png"
import Products from "../products.json"


function Deals() {
    
    const products = Products

    const [startIndex, setStartIndex] = useState(0);

    const dealProducts = products.filter((product) =>product.isDeal)

    const productsToShow = dealProducts.slice(startIndex, startIndex + 3);

    const previousPage = () => {
        if (startIndex > 0) {
        setStartIndex(startIndex - 1);
        }
    };

    const nextPage = () => {
        if (startIndex + 3 < dealProducts.length) {
        setStartIndex(startIndex + 1);
        }
    };

    return(
        <div className="[ deals-container ][ h-deals-container w-deals-container ][ px-deals-horizontal ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ deals-txt ][ text-deals-txt text-deals ][ mb-deals-text-margin ][ text-center ] ">Today's Best Deals For You</h3>
            <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
                <img onClick={previousPage} className={`[ left-arrow ][ w-left-arrow h-left-arrow ][ my-auto ][ mr-arrow-margin ] ${startIndex === 0 ? 'cursor-default' : 'hover:cursor-pointer '}`} src={LeftArrow} />
                {productsToShow.map(product=> (
                    <Deal  key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src} />
                ))}
                <img onClick={nextPage} className={`[ right-arrow ][ w-left-arrow h-left-arrow ][ my-auto ] ${startIndex + 3 >= products.length ? 'cursor-default' : 'hover:cursor-pointer'}`} src={RightArrow} />
            </div>
        </div>
    );
}

export default Deals;