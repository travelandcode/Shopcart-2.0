import Product from "./product";
import { useState } from "react";
import LeftArrow from "../../assets/left.png"
import RightArrow from "../../assets/right.png"
import { useMediaQuery } from "react-responsive";
import { useProduct } from "../../providers/product_provider";

function Carousel(props) {


    const { storeProducts } = useProduct()
    const products = storeProducts
    const [startIndex, setStartIndex] = useState(0);
    const type = props.type
    const title = type === 'DEALS' ? 'Todays Best Deals For You' : 'Best Sellers'
    const isPhoneScreen = useMediaQuery({ minWidth:0, maxWidth: 640});
    const isTabletScreen = useMediaQuery({ minWidth:641, maxWidth: 1023})
    const carouselProducts = type === 'DEALS' ? products.filter((product) => product.isDeal) : products
    const productsToShow = carouselProducts.slice(startIndex, startIndex + ( isTabletScreen || isPhoneScreen ? 2 : 3))

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
        <div className="[ carousel-container ][ h-[578px] w-[1448px] phone:w-screen phone:h-auto tablet:w-screen ][ flex flex-col ][ mx-auto ][ phone:px-[10px] tablet:px-[10px] ]">
            <h3 className="[ carousel-txt ][ text-[28px] leading-[100%] font-bold phone:text-[20px] ][ mb-[40px] phone:mb-[20px] ][ text-center ] ">{title}</h3>
            <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
                <img onClick={previousPage} className={`[ left-arrow ][ w-[25px] h-[25px] phone:w-[15px] phone:h-[15px] tablet:w-[20px] tablet:h-[20px] ][ my-auto ][ mr-[24px] phone:mr-[5px] tablet:mr-[10px] ] ${startIndex === 0 ? 'cursor-default' : 'hover:cursor-pointer '}`} src={LeftArrow} />
                <div className="[ products-display ][ w-[1280px] phone:w-[320px] tablet:w-[740px] ][ mx-auto ][ grid grid-flow-col gap-[24px] phone:gap-[10px] ]">
                {productsToShow.map(product=> (
                        <Product id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src[0]} />
                    ))}
                </div>  
                <img onClick={nextPage} className={`[ right-arrow ][ w-[25px] h-[25px] phone:w-[15px] phone:h-[15px] tablet:w-[20px] tablet:h-[20px] ][ ml-[24px] phone:ml-[5px] tablet:ml-[10px] ][ my-auto ] ${startIndex + 3 >= products.length ? 'cursor-default' : 'hover:cursor-pointer'}`} src={RightArrow} />
            </div>
        </div>
    );
}

export default Carousel;