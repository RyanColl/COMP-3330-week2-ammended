# Getting Started With My Project!

## Week 2

In week 2, we discussed the basics of state. We use state to change variables in the React app by asking react to scan both the virtual DOM and the real DOM, and then change the real DOM to match the virtual one. This updates the page instead of refreshing it, giving react its smooth feel.

### ES6 Usage Examples

If you remember from last week, we used the latest features of EC6 in our project and we documented them here. Well in this project, I used the following EC6 features:

Arrow Function from lines 11-26 in Operators.tsx: <pre><code>const operatorPress = (symbol: string) => {
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
    }</code></pre>

Destructuring from lines 3-5 in Numbers.tsx: <pre><code>const Numbers = ({
    value, setValue, numbers, inOperatorMode, setTempValue, tempValue
}: any) => {}</code></pre>

Class from lines 2-32 in OperatorServices.ts: <pre><code>
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
export default os;</code></pre>

Let from line 15 of Numbers.tsx: <pre><code>let num = parseFloat(value) * 0.01</code></pre>
      
This is the extent of my EC6 feature usage in this project.

### Typescript

Typescript is involved in the project, but do not worry, simply using ```js npm install``` when you enter the project solves any sort of dependency problems. To install typescript in a react-app of your own, visit this [link.](https://create-react-app.dev/docs/adding-typescript/)

### Ternary

[Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is used to check a condition that returns a boolean, and then executes code based on whether it is true or false. Ternary can look at a boolean directly, or it can look at a comparison, as it always resorts to a boolean. In my code, I did not use a comparison, just a straight boolean. 

In the code ``` inOperatorMode ? inOperatorNumPress(num) : numPress((num))} ``` I am asking javascript to evaluate the first statement, <code>inOperatorMode</code>, and if its true, return a function call <code>inOperatorNumPress</code>. If <code>inOperatorMode</code> is false, return a function call <code>numPress</code>. I am using it in this instance to assign a function to an onClick attribute on one of my numbered buttons based on the falsity of <code>inOperatorMode</code>.

### State

State is used to update a component. Updating a component re-renders it, but with the re-rendered value. </br>
For example, in the following code, we will destructure our state variable and our component-updating function (as described in the [docs](https://reactjs.org/docs/hooks-state.html)) and give it an initial value of a boolean.
</br>

<code>const [inOperatorMode, putInOperatorMode] = React.useState(false)</code>

<code>inOperatorMode</code> is a boolean, and <code>putInOperatorMode</code> takes in a boolean, and sets <code>inOperatorMode</code> as such. 

Like this: <code>putInOperatorMode(true)</code>

### Ternary + State

Ternary and state work very well together for various reasons, but I want to go over what I am using in this app. I use ternary and state because when you use state to re-render a component, the entire component is reloaded, thus re-running whatever code is inside it. When we change the <code>inOperatorMode</code> to false and back to true using <code>putInOperatorMode(true)</code> and <code>putInOperatorMode(false)</code> , we reload the function, but with <code>inOperatorMode</code> changed to the variable we set. This means the when ``` inOperatorMode ? inOperatorNumPress(num) : numPress((num))} ``` is read, depending on what the state variable is at the time, true or false, a different function will be assigned to the onclick attribute. This allows me to update the variable <code>tempValue</code> if its true, or <code>value</code> its false.

### How It Works

My app is my second attempt at creating a functioning calculator after the last one I built was nonperformant. I start out by creating an array for each of my button types accross the calculator. I create a grid like structure and layout div-grids accross to hold the different colours. I fill the div-grids with the buttons from the arrays by mapping them out into pre-made structures that use flexbox to move the text to the middle of the button. I give the display an input tag and make two state variables, <code>value</code> and <code>tempValue</code>. I set the value on the input to <code>value</code>. I move onto logic with the operators. The operators all act as an equals button, calculating the <code>value</code> and the <code>tempValue</code> based on the previous operator set. I use class based logic in a mix with in app logic for this, updating state in the app as needed. Overall, I am extremely proud of how I coded this. This app is far more ready and working than my other calculator [app](https://github.com/RyanColl/COMP-3330-Week2).

Please feel free to check out my website too, which is currently just a work in progress. [RyanColl](https://www.rcoll-dev.com)