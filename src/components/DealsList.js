import Deal from "./Deal";

function DealsList({products}){
    return (
        <div className="[ products-wrapper ][ flex flex-row ][ mx-auto ]">
          {products.map(product=> (
            <Deal  key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.img_src} />
          ))}
        </div>
      );
}

export default DealsList;