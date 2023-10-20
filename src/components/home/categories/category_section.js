import Category from "./category"
import Categories from "../../../constants/categories.json"

function CategorySection() {
    const categories = Categories
    return(
        <div className="[ categories-section ][ w-[1360px] h-[500px] phone:w-screen phone:h-auto tablet:w-screen tablet:h-auto ][ py-[80px] px-[40px] phone:py-[20px] phone:px-[10px] ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ categories-section-title ][ text-[28px] leading-[100%] font-bold phone:text-[20px] ][ text-center ][ mb-[40px] phone:mb-[20px] ]">Shop Our Top Categories</h3>
            <div className="[ category-grid ][ grid grid-flow-col gap-[15px] phone:gap-[10px] phone:gap-y-[10px] phone:grid-rows-3 tablet:grid-rows-2 ][ w-[1280px] phone:w-[320px] tablet:w-[720px] ][ mx-auto ]">
                {categories.map(category =>( 
                    <Category name={category.name} img={category.img_src}/> 
                ))}
                
            </div>
        </div>
    );
}

export default CategorySection;