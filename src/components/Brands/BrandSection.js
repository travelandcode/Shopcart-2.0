import Brand from "../Brands/Brand"
import Brands from "../../constants/brands.json"

function BrandSection(){
    const brands = Brands
    return(
        <div className="[ brand-section ][ flex flex-col ][ w-full h-brand-section ][ pb-brand-section ][ mt-brand-section-top ">
            <h3 className="[ brand-section-title ][ text-brand-section-title-txt ][ text-center ][ mb-brand-section-title-margin ]">Choose By Brand</h3>
            <div className="[ brand-grid ][ grid grid-rows-2 grid-flow-col ][ gap-x-brand-col gap-y-brand-row ][ w-brand-grid ][ mx-auto ]">
                {brands.map(brand =>(
                    <Brand title={brand.name} img={brand.img} deliveryTime={brand.deliveryTime} />
                ))}
                
            </div> 
        </div>
    );
}

export default BrandSection;