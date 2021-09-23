import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ styleName, value, onClick }) => {
    const onButtonClick = (event) => {
        onClick(event.target.value);
    }

    return (
        <button 
			className={`btn ${styleName}`}
			onClick={onButtonClick}
			value={value}
		>
		{value}
		</button>
    );
}

const Display = ({ styleName, value }) => {
    return (
        <Fragment>
			<input
				type="text"
				className={`display ${styleName}`}
				value={value}
				readOnly/>
		</Fragment>
    );
}

const KeyPad = ({ onClick }) => {

    return (
        <div className="keypad" >
			<Button styleName="symbol" value="C" onClick={onClick}/>
			<Button styleName="symbol" value="÷" onClick={onClick}/>
			<Button styleName="symbol" value="×" onClick={onClick}/>
			<Button styleName="symbol" value="⌫" onClick={onClick}/>
			
			<Button styleName="number" value="7" onClick={onClick}/>
			<Button styleName="number" value="8" onClick={onClick}/>
			<Button styleName="number" value="9" onClick={onClick}/>
			<Button styleName="symbol" value="-" onClick={onClick}/>
			
			<Button styleName="number" value="4" onClick={onClick}/>
			<Button styleName="number" value="5" onClick={onClick}/>
			<Button styleName="number" value="6" onClick={onClick}/>
			<Button styleName="symbol" value="+" onClick={onClick}/>
			
			<Button styleName="number" value="1" onClick={onClick}/>
			<Button styleName="number" value="2" onClick={onClick}/>
			<Button styleName="number" value="3" onClick={onClick}/>
			<Button styleName="symbol equals" value="=" onClick={onClick}/>
			
			<Button styleName="number zero" value="0" onClick={onClick}/>
		</div>
    );
}

const Calculator = props => {
    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("");

    const isDigit = (x) => {
        return '0' <= x && x <= '9';
    }

    const evaluate = (expression) => {
        try {
            expression = expression.replace(/÷/g, '/').replace(/×/g, '*')
            return eval(expression).toString();
        } catch (err) { return "Invalid"; }
    }

    const handleClick = (value) => {
        if (input === 'Infinity' || input === 'NaN' || input === 'error') {
            setOutput("");
            setInput("0");
        }
        if (value === 'C') {
            setOutput("");
            setInput("0");
        } else if (value === '⌫') {
            setInput(prevInput => (prevInput.length <= 1) ? "0" : prevInput.slice(0, input.length - 1));
        } else if (value === '=') {
            try {
                setInput(prevInput => {
                    const result = evaluate(prevInput)
                    if (result !== "Invalid") {
                        return result;
                    } else return "error";
                });
                setOutput("");
            } catch (err) {
                setOutput('error');
            }
            return;
        } else {
            setInput(prevInput => {
                if (prevInput.charAt(0) === '0' && // if only '0' is present in input state
                    prevInput.length === 1 &&
                    (isDigit(value) || value === '-')) {
                    return value;
                } else if (isDigit(value) ||
                    isDigit(prevInput.charAt(prevInput.length - 1))) {
                    // if last input is a number or next value is a number
                    return prevInput + value;
                } else {
                    // if operator is present input and next value is also operator
                    return prevInput.slice(0, prevInput.length - 1) + value;
                }
            });
        }
        try {
            setOutput(prevOutput => {
                const result = evaluate(input);
                if (result === "Invalid") return prevOutput;
                return result;
            });
        } catch (err) {}
    }

    return (
        <div className="calculator">
			<Display styleName="input" value={input}/>
			<Display styleName="output" value={output}/>
			<KeyPad onClick={(e) => handleClick(e)}/>
		</div>
    );
}

const App = props => {
    return (
        <Fragment>
			<h1>Calculator</h1>
			<Calculator/>
		</Fragment>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));