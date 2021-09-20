import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = props => {
	return (
		<button className="btn">
		{props.value}
		</button>
	);
}

const Display = props => {
	return (
		<React.Fragment>
			<input
				type="text"
				className="display" value={props.value}/>
		</React.Fragment>
	);
}

const KeyPad = props => {
	return (
		<React.Fragment>
			<div className="keypad-row">
				<Button value="C"/>
				<Button value="÷"/>
				<Button value="×"/>
				<Button value="⌫"/>
			</div>
			<div className="keypad-row">
				<Button value="7"/>
				<Button value="8"/>
				<Button value="9"/>
				<Button value="-"/>
			</div>
			<div className="keypad-row">
				<Button value="4"/>
				<Button value="5"/>
				<Button value="6"/>
				<Button value="+"/>
			</div>
			<div className="keypad-row">
				<Button value="1"/>
				<Button value="2"/>
				<Button value="3"/>
				<Button value="="/>
			</div>
			<div className="keypad-row">
				<Button value="%"/>
				<Button value="0"/>
				<Button value="."/>
			</div>
		</React.Fragment>
	);
}

const Calculator = props => {
	return (
		<React.Fragment>
			<Display value="0"/>
			<KeyPad />
		</React.Fragment>
	);
}

const App = props => {
	return (
		<React.Fragment>
			<h1>Calculator</h1>
			<Calculator />
		</React.Fragment>
	);
}

ReactDOM.render(<App/>, document.getElementById('root'));