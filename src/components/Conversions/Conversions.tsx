import React from "react";
import './Conversions.css'
import os from "../../Services/OperatorServices";
const Conversions = ({
    conversions, value, setValue, putInDecimalMode, setTempValue, putInOperatorMode
}: any) => {
    const convert = (id: string) => {
       if(id === 'plus-minus') {
           // turn string into num and x by -1
           let num = parseFloat(value) * -1
           setValue(`${num}`)
       }
       if(id === 'percent') {
           // turn string into num and x by -1
           let num = parseFloat(value) * 0.01
           setValue(`${num}`)
       }
       if(id === 'ac') {
           setValue('0')
           setTempValue('0')
           os.reset();
       }
    }
    return(
        <div className='conversions'>
            {conversions.map((symbol: string, i: number) => {
                let buttonId = (symbol === '%') ? 'percent' : (symbol === '+/-') ? 'plus-minus' : 'ac';
                return <button onClick={() => {convert(buttonId)}} key={i} id={buttonId} className='button'>{symbol}</button>
            })}
        </div>
    )
}
export default Conversions;




