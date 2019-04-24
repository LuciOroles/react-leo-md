import React from "react";
import logo from "../assets/logo.svg";
import fav from "../assets/fav.svg";
import bookmark from "../assets/bookmark.svg";
const web_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
const Card = ({ title, poster_path, fav_handler, favorite, watchLater }) => {
  console.log(favorite, "fav parse");
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
                fav_handler("fav");
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
                fav_handler("later");
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
