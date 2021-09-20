import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = props => {
	return (
		<button className="btn">
		button
		</button>
	);
}

const Display = props => {
	return <h1>0</h1>;
}

const KeyPad = props => {
	return <h1>Keys</h1>;
}

const Calculator = props => {
	return (
		<React.Fragment>
			<Display />
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