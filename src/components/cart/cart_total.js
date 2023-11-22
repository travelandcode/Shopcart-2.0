import {  useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DeliverySwitch from './delivery_switch';

function CartTotal(){
    const [value, setValue] = useState(false);
    return (
    <div className="[ cart-total ][ flex flex-col ][ px-[20px] py-[20px] ][ rounded-[15px] ][ z-[1] ][ w-[300px] h-[550px] ][ border border-solid ][ bg-white ]">
        <p className=" [ delivery-txt ][ text-[15px] text-left ]">Delivery</p>
        {/* <DeliverySwitch onColor="#fff"
            isOn={value}
            handleToggle={() => setValue(!value)}/> */}
        
    </div>
    
    );
}

export default CartTotal;