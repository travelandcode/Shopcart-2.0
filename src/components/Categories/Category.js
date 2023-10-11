
function Category(props){
    const img_src = props.img
    const name = props.name
    return (
        <div className="[ category ][ h-[250px] w-[195px] phone:w-[150px] phone:h-[180px] ][ relative ][ z-0 ][ rounded-[10px] ][ transition-transform hover:scale-[1] ][ overflow-hidden ]">
            <img className="[ category-img ][ max-w-full ][ transition-transform hover:scale-[1.2] ]" src={img_src}/>
            <h3  className="[ category-title ][ w-full ][ absolute ][ text-center text-[#fff] text-[24px] font-semibold font-[Eina02,sans-serif] phone:text-[18px] ][ mt-[20px] mb-[10px] ][ top-0 left-0 right-auto bottom-auto ][ z-[1] ]">{name}</h3>
        </div>
    );
}

export default Category;
