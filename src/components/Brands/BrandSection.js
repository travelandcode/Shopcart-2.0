import Brand from "../Brands/Brand"
import Brands from "../../constants/brands.json"

function BrandSection(){
    const brands = Brands
    return(
        <div className="[ brand-section ][ flex flex-col ][ w-[1360px] h-[407px] ][ pb-[80px] ][ mt-[40px] ][ mx-auto ] ">
            <h3 className="[ brand-section-title ][ text-[28px] leading-[100%] font-bold ][ text-center ][ mb-[40px] ]">Choose By Brand</h3>
            <div className="[ brand-grid ][ grid grid-rows-2 grid-flow-col ][ gap-[23px] gap-y-[16px] ][ w-[1280px] ][ mx-auto ]">
                {brands.map(brand =>(
                    <Brand title={brand.name} img={brand.img} deliveryTime={brand.deliveryTime} />
                ))}
                
            </div> 
        </div>
    );
}

export default BrandSection;