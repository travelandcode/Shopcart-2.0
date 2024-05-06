import { useState } from "react";

function DeliverySwitch({ onExpressChange }){
    const [isExpress, setIsExpress] = useState(false); 
    const handleSwitch = () =>{
        const newExpressValue = !isExpress;
        setIsExpress(newExpressValue);
        onExpressChange(newExpressValue)
    }
    return(
        <label class="[ delivery-switch ][ relative ][ mb-[5px] ]">
            <input checked={isExpress} onChange={handleSwitch} type="checkbox" class="[ switch-input ][ absolute ][ left-1/2 -translate-x-1/2 ][ w-full h-full ][ peer appearance-none ][ rounded-md ]" />
            <span class="[ w-[250px] h-[45px] ][ flex items-center flex-shrink-0 flex-row ][ relative ][ p-[5px] ][ bg-gray-300 ][ rounded-[10px] ][ duration-300 ease-in-out ][ after:w-[54px] after:h-full after:bg-white after:rounded-[10px] after:duration-300 peer-checked:after:translate-x-[55px] peer-checked:after:w-[185px] ]">
                <p className={`[ free-txt ][ ml-[6px] ][ absolute ][ text-[20px] font-[Roboto] text-[#606060] ][ ${isExpress ? '': 'font-bold'} ]`}>Free</p>
                <p className={`[ express-txt ][ absolute ][ ml-[60px] ][ z-[1] ][ text-[20px] font-[Roboto] text-[#606060] ][ ${isExpress ? 'font-bold': ''} ]`}>Express: $9.99</p>
            </span>
        </label>
    );
}

export default DeliverySwitch;