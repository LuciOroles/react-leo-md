import React from "react";
import fav from "../assets/fav.svg";
import bookmark from "../assets/bookmark.svg";
import { FAV, LATER } from "../constants";

function cloneMovie(operation, movie) {
	let mv = Object.assign({}, movie);
	mv.later = [operation];

	return mv;
}

const MarkButton = ({ flag, clickHandler, later, movie, marked }) => {
	const btnCls = "btn btn-light";

	return (
		<button
			type="button"
			className={marked + btnCls}
			onClick={() => {
				clickHandler(cloneMovie(flag === FAV ? FAV : LATER, movie));
			}}
		>
			<img src={flag === FAV ? fav : bookmark} alt="test" />
		</button>
	);
};
export default MarkButton;
