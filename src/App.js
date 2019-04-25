import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Shortlist from "./components/Shortlist";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">React-Redux-Movie LeoVegas</header>
				<div className="container-fluid">
					<div className="row">
						<div className="offset-lg-1 col-lg-4 offset-md-1  col-md-5 col-sm-6 col-xs-12">
							<div className="row">
								<SearchForm />
							</div>
						</div>

						<div className="col-lg-3 offset-md-1 col-md-5 col-sm-6 col-xs-12">
							<Shortlist />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
