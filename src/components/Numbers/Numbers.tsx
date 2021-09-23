import React from "react";
import './Numbers.css';
const Numbers = ({
    value, setValue, numbers, inOperatorMode, setTempValue, tempValue
}: any) => {
    const numPress = (num: string) => {
        value === '0'
        ? setValue(num)
        : setValue(`${value}${num}`)
    }
    const inOperatorNumPress = (num: string) => {
        tempValue === '0'
        ? setTempValue(num)
        : setTempValue(`${tempValue}${num}`)
    }
    return(
        <div className='numbers'>
            {numbers.map((num: string, i: number) => {
                return <button 
                        onClick={() => {inOperatorMode ? inOperatorNumPress(num) : numPress((num))}} 
                        key={i} 
                        id={(num === '.') ? `period` : `num-${num}`}
                        className='button number'
                        >{num}</button>
            })}
        </div>
    )
}
export default Numbers;