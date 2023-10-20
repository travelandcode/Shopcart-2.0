function FooterColumn(props) {
    const columnName = props.columnName
    const items = props.items
    return (
        <div className="[ footer-column ][ phone:hidden ][ tablet:hidden ]">
            <h2 className="[ footer-column-name ][ mb-[23px] ][ font-[Inter,sans-serif] text-[18px] font-semibold text-[#000] text-left ]">{columnName}</h2>
            <ul role="list" className="[ footer-menu-list ]">
                {items.map((item,index) =>(
                    <li key={index} className="[ list-item ][ text-[#000] text-[14px] font-normal text-left font-[Inter,sans-serif] ][ mb-[5px] ][ transition duration-[200ms] ease-in behaviour-normal delay-0 ][ hover:text-[#ff5c4c] hover:translate-x-[10px] ]">{item}</li>
                ))}
            </ul>
        </div>
    );

}

export default FooterColumn;