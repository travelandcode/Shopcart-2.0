function ProductSearchResult ({data}){
    return (
        <a href={`/product/${data.id}`} className="[ result ][ h-[50px] ][ flex flex-row ][ hover:bg-[#E0E0E0] ][ ]">
            <img className="[ result-img ]" src={data.img_src[0]} alt={data.name}  />
            <p className="[ result-txt ][ my-auto ][ text-[18px] font-[Roboto] ][ truncate ][ ml-[20px] ]">{data.name}</p>
        </a>
    )
}

export default ProductSearchResult