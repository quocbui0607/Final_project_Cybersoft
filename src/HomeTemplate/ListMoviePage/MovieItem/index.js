import "./movieItem.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingStar from "./../../../common/RatingStar";

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-item col-md-3">
        <div className="card">
          <div>
            <img className="card-img-top" src={movie.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim.toUpperCase()}</h4>
              <div className="card-desc">
                <RatingStar/>
                <span className="date"> Released: {new Date(movie.ngayKhoiChieu).toLocaleDateString()}</span>
                <span className="imdb"> IMDb: {movie.danhGia}</span>
              </div>              
              <Link className="btn" to={`/detail/${movie.maPhim}`}>
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
