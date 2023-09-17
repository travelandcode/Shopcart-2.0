import Category from "./Category"
import Categories from "../../constants/categories.json"

function CategorySection() {
    const categories = Categories
    return(
        <div className="[ categories-section ][ w-categories-section h-categories-section ][ py-categories-section-vertical px-categories-section-horizontal ][ flex flex-col ][ mx-auto ]">
            <h3 className="[ categories-section-title ][ text-categories-section-title-txt ][ text-center ][ mb-categories-section-title-margin ]">Shop Our Top Categories</h3>
            <div className="[ category-grid ][ grid grid-flow-col ][ w-category-grid ]">
                {categories.map(category =>( 
                    <Category name={category.name} img={category.img_src}/> 
                ))}
                
            </div>
        </div>
    );
}

export default CategorySection;