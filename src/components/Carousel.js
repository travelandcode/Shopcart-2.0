import Product from "./Product";
import { useState } from "react";
import LeftArrow from "../images/left.png"
import RightArrow from "../images/right.png"
import Products from '../products.json'

function Carousel(props) {

    const products = Products
    const [startIndex, setStartIndex] = useState(0);
    const type = props.type
    const title = type == 'DEALS' ? 'Todays Best Deals For You' : 'Best Sellers'
    const carouselProducts = type == 'DEALS' ? products.filter((product) => product.isDeal) : products.filter((product) => product.isBestSeller) 
    const productsToShow = carouselProducts.slice(startIndex, startIndex + 3)  

    const previousPage = () => {
    if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const nextPage = () => {
    if (startIndex + 3 < carouselProducts.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return(
        <div className="[ carousel-container ][ h-[578px] w-[1448px] ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ carousel-txt ][ text-[28px] leading-[100%] font-bold ][ mb-[40px] ][ text-center ] ">{title}</h3>
            <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
                <img onClick={previousPage} className={`[ left-arrow ][ w-[25px] h-[25px] ][ my-auto ][ mr-[24px] ] ${startIndex === 0 ? 'cursor-default' : 'hover:cursor-pointer '}`} src={LeftArrow} />
                <div className="[ products-display ][ w-[1280px] ][ mx-auto ][ grid grid-flow-col gap-[24px]]">
                {productsToShow.map(product=> (
                        <Product  key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src} />
                    ))}
                </div>  
                <img onClick={nextPage} className={`[ right-arrow ][ w-[25px] h-[25px] ][ ml-[24px] ][ my-auto ] ${startIndex + 3 >= products.length ? 'cursor-default' : 'hover:cursor-pointer'}`} src={RightArrow} />
            </div>
        </div>
    );
}

export default Carousel;