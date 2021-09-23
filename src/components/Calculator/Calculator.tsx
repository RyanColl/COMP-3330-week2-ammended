import { Decipher } from "crypto";
import React, { useState } from "react";
import Conversions from "../Conversions/Conversions";
import Display from "../Display/Display";
import Numbers from "../Numbers/Numbers";
import Operators from "../Operators/Operators";
import './Calculator.css';



const Calculator = ({
    calcData: {conversions, numbers, operators}, 
    setTempValue, setValue, value, tempValue, 
    inOperatorMode, putInOperatorMode
}: any) => {
    const [operator, setOperator] = useState('=')
    return(
        <div className='calculator'>
            {/* @ts-ignore */}
            <Display 
            value={value} 
            tempValue={tempValue}
            setTempValue={setTempValue}
            setValue={setValue}
            />
            <Conversions 
            value={value}
            setValue={setValue}
            conversions={conversions} 
            setTempValue={setTempValue}
            />
            <Numbers 
            value={value}
            setValue={setValue}
            numbers={numbers} 
            tempValue={tempValue}
            setTempValue={setTempValue}
            inOperatorMode={inOperatorMode}
            />
            {/* @ts-ignore */}
            <Operators 
            value={value}
            setValue={setValue}
            operators={operators} 
            tempValue={tempValue}
            setTempValue={setTempValue}
            setOperator={setOperator}
            operator={operator}
            inOperatorMode={inOperatorMode}
            putInOperatorMode={putInOperatorMode}
            />
        </div>
    )
}
export default Calculator;