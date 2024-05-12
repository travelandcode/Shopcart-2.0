function Service(props){
    const title = props.title
    const img = props.img
    const description = props.description
    return(
        <div className="[ service ][ w-[416px] h-[480px] phone:w-[340px] tablet:w-[600px] ][ bg-[#E8E8E8] ][ z-1 ][ shadow-xl [ overflow-hidden ][ rounded-[10px] ][ mx-auto ]">
            <div className="[ service-content ][ w-full h-[220px] ][ p-[40px] ]">
                <h3 className="[ service-help-title ][ text-[22px] phone:text-[18px] font-bold font-[Eina02,sans-serif] phone:text-left ][ mb-[24px] ][ hover:text-[#003d29] ]">{title}</h3>
                <p className="[ service-help-paragraph ][ text-[#231f1e] text-[16px] font-medium phone:text-left ]">{description}</p>
            </div>
            <div className="[ service-img-container ][ overflow-hidden ]">
                <img src={img} className="[ service-img ][ rounded-b-[10px] ][ tablet:w-full ][ transition-transform hover:scale-[1.2] ]" alt="service"/>
            </div>
        </div>
    );
}
export default Service;