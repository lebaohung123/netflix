import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && ( 
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          necessitatibus adipisci quos illo deserunt rerum odio porro, mollitia
          vitae amet, qui, nisi asperiores corporis laboriosam aliquid? Amet
          porro iure possimus?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
