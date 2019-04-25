import React from "react";
import MarkButton from "./MarkButton";
import { FAV, LATER } from "../constants";

const List = ({ movies, shortlistOperation, shortlist }) => {
	return (
		<ul className="list-group">
			{movies.map(movie => {
				let favClass = "",
					laterClass = "";
				shortlist.forEach(sh_movie => {
					if (sh_movie["id"] === movie["id"]) {
						if (sh_movie.later.indexOf(FAV) > -1) {
							favClass = "favorited ";
						}
						if (sh_movie.later.indexOf(LATER) > -1) {
							laterClass = "watchLater ";
						}
					}
				});
				return (
					<li key={movie.id} className="list-group-item">
						<div className="item-wrap">
							<div>
								{movie.title}
								<br />
								<div className="release_date">{movie.release_date}</div>
							</div>

							<div className="button-wrap">
								<MarkButton
									flag={FAV}
									clickHandler={shortlistOperation}
									later={movie.later || []}
									movie={movie}
									marked={favClass}
								/>
								<MarkButton
									flag={LATER}
									clickHandler={shortlistOperation}
									later={movie.later || []}
									movie={movie}
									marked={laterClass}
								/>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
