import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function PasswordCriteriaModal(password){
    const has8Characters = (password.length >= 8)
    const hasUpperCaseCharacter = (/[A-Z]/.test(password))
    const hasNumber = (/\d/.test(password))
    const hasSymbol = /[^\w\d]/.test(password)
    const checksRemaining = 4 - ((has8Characters ? 1 : 0) +(hasUpperCaseCharacter ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1: 0))
    const displayText = ((checksRemaining === 3 && "👍Good Start") || (checksRemaining === 2 && "🙂 Getting There") || (checksRemaining === 1 && "🤏 You're Almost There") || (checksRemaining === 0 && "👌 Perfect") )
    return (

        
        <div className="[ password-check ][ bg-white ][ h-auto w-[300px] ][ border border-solid ][ shadow-md shadow-current ][ p-[10px] ][ rounded-[10px] ][ flex flex-col ][ z-[100] ][ absolute top-[250px] left-0 ]">
            <div className="[ display-txt ][ font-[Roboto] text-[16px] ]">Password Requirements</div>
            <div className="[ display-txt ][ font-[Roboto] text-[22px] ][ mt-[10px] ]">{displayText}</div>
            <div className="[ progress-bar ][ mt-[15px] ][ flex flex-row ]">
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining === 4 && "bg-[#D3D3D3]" } ${ checksRemaining === 3 && "bg-[#FF0000]"} ${ (checksRemaining === 1 || checksRemaining === 2)  && "bg-[#F28C28]"} ${ checksRemaining === 0 && "bg-[#0BDA51]"} ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining >= 3 && "bg-[#D3D3D3]" } ${ (checksRemaining === 1 || checksRemaining === 2) && "bg-[#FFA500]" } ${checksRemaining === 0 && "bg-[#0BDA51]"} ][ ml-[5px] ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining >= 2 && "bg-[#D3D3D3]" } ${ checksRemaining === 1 && "bg-[#FFBF00]" } ${ checksRemaining === 0 && "bg-[#0BDA51]"} [ ml-[5px] ]`}></div>
                <div className={`[ h-[11px] w-[60px] ][ rounded-[10px] ][ ${ checksRemaining === 0 ? "bg-[#0BDA51]" : "bg-[#D3D3D3]" } [ ml-[5px] ]`}></div>
            </div>
            <div className="[ checks ][ mt-[20px] ]">
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={has8Characters ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 8 characters</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasNumber ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 number (0-9)</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasUpperCaseCharacter ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 upper case letter (A-Z)</p>
                </div>
                <div className="[ 8-characters-container ][ flex flex-row ]">
                    <FontAwesomeIcon className="[ h-[25px]  w-[25px] ]" icon={faCheck} style={hasSymbol ? {color: "#0BDA51"} : {color: "#D3D3D3"}} />
                    <p className="[ ml-[10px] ]">At least 1 symbol (#$&)</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordCriteriaModal;