import * as ActionType from "./constants";
import axios from "axios";

export const actFetchListMovie = () => {
    return(dispatch) => {
        dispatch(actListMovieRequest);
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
            method: "GET",
        })
          .then((result) => {
              //Success
              dispatch(actListMovieSuccess(result.data));
          })
          .catch((err) => {
              //Failed
              dispatch(actListMovieFailed(err));
          })
    }
}

const actListMovieRequest = () => {
    return {
      type: ActionType.LIST_MOVIE_REQUEST,
    };
  };

const actListMovieSuccess = (data) => {
    return {
      type: ActionType.LIST_MOVIE_SUCCESS,
      payload: data,
    };
  };
  
  const actListMovieFailed = (data) => {
    return {
      type: ActionType.LIST_MOVIE_FAILED,
      payload: data,
    };
  };

