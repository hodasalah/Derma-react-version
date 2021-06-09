import React from "react";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
class App extends React.Component {
	state = {
		openModal: [],
	};
	show = (id) => {
		this.setState({
			openModal: {
				[id]: true,
			},
		});
	};
	hide = (id) => {
		this.setState({
			openModal: {
				[id]: false,
			},
		});
	};
	render() {
		return (
			<div className="App">
				<Route
					path="/"
					render={() => (
						<Home
							open={this.state.openModal}
							show={this.show}
							hide={this.hide}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
