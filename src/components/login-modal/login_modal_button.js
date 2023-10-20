
function LoginModalButton(props){
    const link =  props.link
    const svg = props.svg
    const txt = props.txt
    return(
        <a href={link} className="[ modal-btn ][ no-underline ][ h-[44px] w-full ][ border-solid border border-[#1618231f] ][ bg-white text-[#161823] font-semibold font-sans p-3 ]">
            <div className="[ modal-icon ][ w-[20px] h-[20px] ]">
                {svg}
            </div>
            <div className="[ modal-txt ][ h-[22px] ][ mx-auto -mt-5 ]">
                <p>{txt}</p>
            </div>
        </a>
    )
}

export default LoginModalButton;