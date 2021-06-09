import React from "react";
import "./Custom-button.style.scss";
function CustomButton({children,...otherProps})
{
    return(<button className="custom-button" {...otherProps}>{children}</button>);
}
export default CustomButton;