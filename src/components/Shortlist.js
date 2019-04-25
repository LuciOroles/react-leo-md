import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { shortlistAdd } from "../actions/shortlist";
import { FAV, LATER } from "../constants";
function mapStateToProps(state) {
	return {
		shortlist: state.shortlist
	};
}

const mapDispatchToProps = dispatch => {
	return {
		shortlistAdd: movie => dispatch(shortlistAdd(movie))
	};
};

class Shortlist extends Component {
	render() {
		const updateShortList = movie => {
			let newMovie = Object.assign({}, movie);
			return function(type) {
				newMovie["later"] = [type];
				shortlistAdd(newMovie);
			};
		};
		const { shortlist, shortlistAdd } = this.props;
		return (
			<div className="row">
				<div className="row" style={{ width: "100%" }}>
					<h4>my short list </h4>
				</div>
				<div className="row">
					{shortlist.map(movie => {
						return (
							<Card
								key={movie.id}
								title={movie.title}
								poster_path={movie.poster_path}
								fav_handler={v => updateShortList(movie)(v)}
								favorite={movie.later.indexOf(FAV) > -1}
								watchLater={movie.later.indexOf(LATER) > -1}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Shortlist);
