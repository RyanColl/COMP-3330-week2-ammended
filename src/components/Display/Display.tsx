import React from "react";
import './Display.css'
const Display = ({
    value, tempValue
}: any ) => { 
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const display = ((tempValue === '0') 
                    ? (value.length > 9) ? parseFloat(value).toFixed(4) : value
                    : (tempValue.length > 9) ? parseFloat(tempValue).toFixed(4) : tempValue)
    return(
        <div className='display'>
             <input 
             onChange={(e) => inputChange(e)} 
             value={display} 
             className='display-number' 
             />
        </div>
    )
}
export default Display;