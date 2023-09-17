
function Category(props){
    const img_src = props.img
    const name = props.name
    return (
        <div className="[ category ][ h-category w-category ][ relative ][ z-0 ][ rounded-category-img ][ transition-transform hover:scale-category-container ][ overflow-hidden ]">
            <img className="[ category-img ][ max-w-full ][ transition-transform hover:scale-category-zoom ]" src={img_src}/>
            <h3  className="[ category-title ][ w-full ][ absolute ][ text-center text-category-title font-category-title ][ mt-category-title-margin-top mb-category-title-margin-bottom ][ top-0 left-0 right-auto bottom-auto ][ z-category-title ]">{name}</h3>
        </div>
    );
}

export default Category;
