import BestSeller from "./Product";
import { useState } from "react";
import LeftArrow from "../images/left.png"
import RightArrow from "../images/right.png"
import Products from '../products.json'

function BestSellers() {

    const products = Products
    const [startIndex, setStartIndex] = useState(0);

    const bestSellerProducts = products.filter((product) =>product.isBestSeller)

    const productsToShow = bestSellerProducts.slice(startIndex, startIndex + 3);

    const previousPage = () => {
    if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const nextPage = () => {
    if (startIndex + 3 < bestSellerProducts.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return(
        <div className="[ best-sellers-container ][ h-best-sellers-container w-best-sellers-container ][ px-best-sellers-horizontal ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ best-seller-txt ][ text-best-sellers-txt ][ mb-best-sellers-text-margin ][ text-center ] ">Best Sellers</h3>
            <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
                <img onClick={previousPage} className={`[ left-arrow ][ w-left-arrow h-left-arrow ][ my-auto ][ mr-arrow-margin ] ${startIndex === 0 ? 'cursor-default' : 'hover:cursor-pointer '}`} src={LeftArrow} />
                    {productsToShow.map(product=> (
                        <BestSeller  key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src} />
                    ))}
                <img onClick={nextPage} className={`[ right-arrow ][ w-left-arrow h-left-arrow ][ my-auto ] ${startIndex + 3 >= products.length ? 'cursor-default' : 'hover:cursor-pointer'}`} src={RightArrow} />
            </div>
        </div>
    );
}

export default BestSellers;