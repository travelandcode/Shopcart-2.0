import Deal from "./Deal";
import { useState } from "react";
import LeftArrow from "../images/left.png"
import RightArrow from "../images/right.png"
import Products from "../products.json"

function DealsList(){

  const products = Products
  console.log(products.length)

  const [startIndex, setStartIndex] = useState(0);

  const productsToShow = products.slice(startIndex, startIndex + 3);

  const previousPage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextPage = () => {
    if (startIndex + 3 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

    return (
        <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
          <img onClick={previousPage} className={`[ left-arrow ][ w-left-arrow h-left-arrow ][ my-auto ][ mr-arrow-margin ] ${startIndex === 0 ? 'cursor-default' : 'hover:cursor-pointer '}`} src={LeftArrow} />
          {productsToShow.map(product=> (
            <Deal  key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src} />
          ))}
          <img onClick={nextPage} className={`[ right-arrow ][ w-left-arrow h-left-arrow ][ my-auto ] ${startIndex + 3 >= products.length ? 'cursor-default' : 'hover:cursor-pointer'}`} src={RightArrow} />
        </div>
      );
}

export default DealsList;