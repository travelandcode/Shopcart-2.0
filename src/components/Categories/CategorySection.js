import Category from "./Category"
import Categories from "../../constants/categories.json"

function CategorySection() {
    const categories = Categories
    return(
        <div className="[ categories-section ][ w-[1360px] h-[500px] ][ py-[80px] px-[40px] ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ categories-section-title ][ text-[28px] leading-[100%] font-bold ][ text-center ][ mb-[40px] ]">Shop Our Top Categories</h3>
            <div className="[ category-grid ][ grid grid-flow-col gap-[15px] ][ w-[1280px] ]">
                {categories.map(category =>( 
                    <Category name={category.name} img={category.img_src}/> 
                ))}
                
            </div>
        </div>
    );
}

export default CategorySection;