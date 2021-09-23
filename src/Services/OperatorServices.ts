
class OperatorServices {
    private value = 0;
    private tempValue = 0;
    private minus() {
        return (this.value - this.tempValue)
    }
    private plus() {
        return (this.value + this.tempValue)
    }
    private divide() {
        if(this.tempValue === 0) return this.value;
        else return (this.value / this.tempValue)
    }
    private multiply() {
        return (this.value * this.tempValue)
    }
    calculate(value: string, tempValue: string, symbol: string) {
        this.value = parseFloat(value);
        this.tempValue = parseFloat(tempValue)
        if(symbol === '+') return this.plus()
        if(symbol === '-') return this.minus()
        if(symbol === '÷') return this.divide()
        if(symbol === 'x') return this.multiply()
    }
    reset() {
        this.value = 0;
        this.tempValue = 0;
    }
} 
const os = new OperatorServices()
export default os;