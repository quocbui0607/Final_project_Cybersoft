import api from "../../../../utils/apiUtils";
import {
  ADD_MOVIE_FAILED,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
  EDIT_MOVIE,
  EDIT_MOVIE_FAILED,
  FIND_MOVIE,
  GET_MOVIES_FAILED,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  UPLOAD_IMG_FAILED,
} from "./constants";

export const showLoadingAction = () => ({
  type: GET_MOVIES_LOADING,
});

export const requestMoviesSuccessAction = (data) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});

export const requestMoviesFailAction = (data) => ({
  type: GET_MOVIES_FAILED,
  payload: data,
});

export const fetchListMoviesAction = () => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
      .then((res) => dispatch(requestMoviesSuccessAction(res.data)))
      .catch((err) => dispatch(requestMoviesFailAction(err)));
  };
};

export const requestEditMovieFailAction = (data) => ({
  type: EDIT_MOVIE_FAILED,
  payload: data,
});

export const sendEditMovieAction = (editMovie) => {
  let formData = new FormData();

  const dateValue = editMovie.ngayKhoiChieu.split("-");
  const dateUpdated = dateValue[2] + "/" + dateValue[1] + "/" + dateValue[0];
  const payloadEditMovie = {
    maPhim: editMovie.maPhim,
    tenPhim: editMovie.tenPhim,
    biDanh: editMovie.biDanh,
    trailer: editMovie.trailer,
    hinhAnh: editMovie.hinhAnh,
    moTa: editMovie.moTa,
    maNhom: editMovie.maNhom,
    danhGia: editMovie.danhGia,
    ngayKhoiChieu: dateUpdated,
  };

  for(let key in payloadEditMovie) {
    if(key === 'hinhAnh') {
      formData.append('File', payloadEditMovie.hinhAnh, payloadEditMovie.hinhAnh.name)
    } else {
      formData.append(key, payloadEditMovie[key])
    }
  }

  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .post("QuanLyPhim/CapNhatPhimUpload", formData)
      .then((res) => dispatch(fetchListMoviesAction()))
      .catch((err) => dispatch(requestEditMovieFailAction(err)));
  };
};

export const requestDeleteMovieFailAction = (data) => ({
  type: DELETE_MOVIE_FAILED,
  payload: data,
});

export const sendDeleteMovieAction = (deletMovie) => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .delete(
        "QuanLyPhim/XoaPhim?MaPhim=" + encodeURIComponent(deletMovie.maPhim)
      )
      .then((res) => dispatch(fetchListMoviesAction()))
      .catch((err) => dispatch(requestDeleteMovieFailAction(err)));
  };
};

export const requestAddMovieFailAction = (data, newMovie) => ({
  type: ADD_MOVIE_FAILED,
  payload: data,
  newMovie: newMovie,
});

export const requestAddMovieSuccessAction = (data) => ({
  type: ADD_MOVIE_SUCCESS,
  payload: data,
});

export const sendAddMovieAction = (newMovie) => {
  let formData = new FormData();

  for(let key in newMovie) {
    if(key === 'hinhAnh') {
      formData.append('File', newMovie.hinhAnh, newMovie.hinhAnh.name)
    } else {
      formData.append(key, newMovie[key])
    }
  }

  console.log(formData)

  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .post("QuanLyPhim/ThemPhimUploadHinh", formData)
      .then((res) => dispatch(fetchListMoviesAction()))
      .catch((err) => dispatch(requestAddMovieFailAction(err, newMovie)));
  };
};

export const sendKeywordMovies = (keywords) => ({
  type: FIND_MOVIE,
  payload: keywords,
});

export const sendEditMovie = (movieInfo) => ({
  type: EDIT_MOVIE,
  payload: movieInfo,
});

export const requestUploadImageFailAction = (data) => ({
  type: UPLOAD_IMG_FAILED,
  payload: data,
});

export const sendUploadImageAction = (file) => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .post("QuanLyPhim/CapNhatPhimUpload", file)
      .then((res) => dispatch(fetchListMoviesAction()))
      .catch((err) => dispatch(requestUploadImageFailAction(err)));
  };
};
