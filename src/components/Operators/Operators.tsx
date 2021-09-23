import React from "react";
import './Operators.css'
import os from "../../Services/OperatorServices";



const Operators = ({
    operators, value, setValue, tempValue, setTempValue, 
    putInOperatorMode, operator, setOperator
}: any) => {
    const operatorPress = (symbol: string) => {
        // if no operator has been pressed yet enter operator mode and return
        if(operator === '=' && symbol !== '=') {
            setOperator(symbol)
            putInOperatorMode(true)
            return
        }
        setOperator(symbol)
        // operator starts at =, so if the last thing pressed is not = it means something other than 0 was pressed
        if(operator !== '=') {
            console.log(os.calculate(value, tempValue, operator))
            setValue(os.calculate(value, tempValue, operator))
        }
        if(symbol === '=') putInOperatorMode(false)
        setTempValue('0')
    }
    
    
    return(
        <div className='operators'>
            {operators.map((operator: string, i: number) => {
                return <button onClick={() => {operatorPress(operator)}} key={i} id={`operator-${i+1}`} className='button operator'>{operator}</button>
            })}
        </div>
    )
}
export default Operators;


