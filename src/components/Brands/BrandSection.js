import Brand from "../Brands/Brand"
import Brands from "../../constants/brands.json"
import { useMediaQuery } from "react-responsive";

function BrandSection(){
    const brands = Brands
    const isPhoneScreen = useMediaQuery({ minWidth:0, maxWidth: 640});
    const isTabletScreen = useMediaQuery({minWidth: 641, maxWidth: 1023});
    const length = isPhoneScreen || isTabletScreen ? 4 : brands.length
    const brandsToShow = brands.slice(0,length)
    return(
        <div className="[ brand-section ][ flex flex-col ][ w-[1360px] h-[407px] phone:w-screen phone:h-auto tablet:w-screen ][ pb-[80px] phone:pb-[20px] ][ mt-[40px] phone:mt-[20px] ][ mx-auto ] ">
            <h3 className="[ brand-section-title ][ text-[28px] leading-[100%] font-bold phone:text-[20px] ][ text-center ][ mb-[40px] phone:mb-[20px] ]">Choose By Brand</h3>
            <div className="[ brand-grid ][ grid grid-rows-2 grid-flow-col ][ gap-[23px] gap-y-[16px] phone:gap-[10px] phone:gap-y-[10px] ][ w-[1280px] phone:w-[320px]  tablet:w-[720px] ][ mx-auto ]">
                {brandsToShow.map(brand =>(
                    <Brand title={brand.name} img={brand.img} deliveryTime={brand.deliveryTime} />
                ))}
                
            </div> 
        </div>
    );
}

export default BrandSection;