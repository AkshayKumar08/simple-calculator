import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = props => {
	return (
		<button className={`${props.class? props.class: "btn"}`}>
		{props.value}
		</button>
	);
}

const Display = props => {
	return (
		<React.Fragment>
			<input
				type="text"
				className={props.class}
				value={props.value}
				readonly=""/>
		</React.Fragment>
	);
}

const KeyPad = props => {
	return (
		<div className="keypad">
			<Button class="btn symbol" value="C"/>
			<Button class="btn symbol" value={<Fragment>&divide;</Fragment>}/>
			<Button class="btn symbol" value={<Fragment>&times;</Fragment>}/>
			<Button class="btn symbol" value="⌫"/>
			
			<Button value="7"/>
			<Button value="8"/>
			<Button value="9"/>
			<Button class="btn symbol" value="-"/>
			
			<Button value="4"/>
			<Button value="5"/>
			<Button value="6"/>
			<Button class="btn symbol" value="+"/>
			
			<Button value="1"/>
			<Button value="2"/>
			<Button value="3"/>
			<Button class="btn equals" value="="/>
			
			<Button class="btn symbol" value="%"/>
			<Button value="0"/>
			<Button value="."/>
			
		</div>
	);
}

const Calculator = props => {
	return (
		<div className="calculator">
			<Display class="display input" value="0"/>
			<Display class="display output" value="0"/>
			<KeyPad />
		</div>
	);
}

const App = props => {
	return (
		<React.Fragment>
			<h1>Calculator</h1>
			<Calculator/>
		</React.Fragment>
	);
}

ReactDOM.render(<App/>, document.getElementById('root'));