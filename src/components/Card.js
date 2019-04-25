import React from "react";
import fav from "../assets/fav.svg";
import bookmark from "../assets/bookmark.svg";
import { FAV, LATER } from "../constants";
const web_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

const Card = ({ title, poster_path, fav_handler, favorite, watchLater }) => {
	return (
		<div className="card wrapper">
			<img className="card-img-top" src={web_path + poster_path} alt="x" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
			</div>
			<div className="card-body">
				<div className="shortlist">
					<div className="fav">
						<button
							type="button"
							className={favorite ? "favorited btn btn-light" : "btn btn-light"}
							onClick={() => {
								fav_handler(FAV);
							}}
						>
							<img src={fav} alt="Favorite" />
						</button>
						<button
							type="button"
							className={
								watchLater ? "watchLater btn btn-light" : "btn btn-light"
							}
							onClick={() => {
								fav_handler(LATER);
							}}
						>
							<img src={bookmark} alt="Later" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
