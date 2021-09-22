import { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ styleName, value, setInput }) => {

    const isDigit = (x) => {
        return '0' <= x && x <= '9';
    }

    const onButtonClick = (value) => {
        if (value === 'C') {
            setInput('0')
        } else if (value === '⌫') {
            setInput(input => input.slice(0, input.length - 1))
        } else if (value === '=') {
        	// TODO
        } else {
            setInput(input => {
                if (input.charAt(0) === '0' &&
                    input.length == 1 &&
                    (isDigit(value) || value === '-')) {
                    return value;
                } else if (isDigit(value) ||
                    isDigit(input.charAt(input.length - 1))) {
                    return input + value;
                } else {
                    return input.slice(0, input.length - 1) + value;
                }
            });
        }
    }

    return (
        <button 
			className={`btn ${styleName}`}
			onClick={() => onButtonClick(value)}
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

const KeyPad = ({ setInput }) => {

    return (
        <div className="keypad" >
			<Button styleName="symbol" value="C" setInput={setInput}/>
			<Button styleName="symbol" value="÷" setInput={setInput}/>
			<Button styleName="symbol" value="×" setInput={setInput}/>
			<Button styleName="symbol" value="⌫" setInput={setInput}/>
			
			<Button styleName="number" value="7" setInput={setInput}/>
			<Button styleName="number" value="8" setInput={setInput}/>
			<Button styleName="number" value="9" setInput={setInput}/>
			<Button styleName="symbol" value="-" setInput={setInput}/>
			
			<Button styleName="number" value="4" setInput={setInput}/>
			<Button styleName="number" value="5" setInput={setInput}/>
			<Button styleName="number" value="6" setInput={setInput}/>
			<Button styleName="symbol" value="+" setInput={setInput}/>
			
			<Button styleName="number" value="1" setInput={setInput}/>
			<Button styleName="number" value="2" setInput={setInput}/>
			<Button styleName="number" value="3" setInput={setInput}/>
			<Button styleName="symbol equals" value="=" setInput={setInput}/>
			
			<Button styleName="number zero" value="0" setInput={setInput}/>
		</div>
    );
}

const Calculator = props => {
    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("");
    return (
        <div className="calculator">
			<Display styleName="input" value={input}/>
			<Display styleName="output" value={output}/>
			<KeyPad setInput={input => setInput(input)}/>
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