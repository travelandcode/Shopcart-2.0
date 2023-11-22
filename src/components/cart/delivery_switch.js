import React from "react";
import "./delivery_switch.css";

function DeliverySwitch({ isOn, handleToggle, onColor }){
    return(
            <label className="[ react-switch ]" style={{ background: isOn && onColor }} >
                <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                type="checkbox"
                />
                <div className="react-switch-button" />
                <div className="react-switch-labels">
                    <span className="[ w-[40%] ]">Free</span>
                    <span className="[ w-[60%] ]">Express $9.99</span>
                </div>
            </label>
        
    );
}

export default DeliverySwitch;