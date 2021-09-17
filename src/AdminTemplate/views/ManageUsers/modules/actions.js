import api from "../../../../utils/apiUtils";
import {
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  DELETE_USER_FAILED,
  EDIT_USER,
  EDIT_USER_FAILED,
  FIND_USER,
  GET_USERS_FAILED,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
} from "./constants";

export const showLoadingAction = () => ({
  type: GET_USERS_LOADING,
});

export const requestUsersSuccessAction = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const requestUsersFailAction = (data) => ({
  type: GET_USERS_FAILED,
  payload: data,
});

export const fetchListUsersAction = () => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
      .then((res) => dispatch(requestUsersSuccessAction(res.data)))
      .catch((err) => dispatch(requestUsersFailAction(err)));
  };
};

export const requestEditUserFailAction = (data) => ({
  type: EDIT_USER_FAILED,
  payload: data,
});

export const sendEditUserAction = (editUser) => {
  const payloadEditUser = {
    taiKhoan: editUser.taiKhoan,
    hoTen: editUser.hoTen,
    email: editUser.email,
    soDt: editUser.soDt,
    maLoaiNguoiDung: editUser.maLoaiNguoiDung,
    matKhau: editUser.matKhau,
    maNhom: "GP01",
  };

  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", payloadEditUser)
      .then((res) => dispatch(fetchListUsersAction()))
      .catch((err) => dispatch(requestEditUserFailAction(err)));
  };
};

export const requestDeleteUserFailAction = (data) => ({
  type: DELETE_USER_FAILED,
  payload: data,
});

export const sendDeleteUserAction = (editUser) => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .delete("QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=" + encodeURIComponent(editUser.taiKhoan))
      .then((res) => dispatch(fetchListUsersAction()))
      .catch((err) => dispatch(requestDeleteUserFailAction(err)));
  };
};

export const requestAddUserFailAction = (data, newUser) => ({
  type: ADD_USER_FAILED,
  payload: data,
  newUser: newUser
});

export const requestAddUserSuccessAction = (data) => ({
  type: ADD_USER_SUCCESS,
  payload: data,
});

export const sendAddUserAction = (newUser) => {
  return (dispatch) => {
    dispatch(showLoadingAction());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", newUser)
      .then((res) => dispatch(fetchListUsersAction()))
      .catch((err) => dispatch(requestAddUserFailAction(err, newUser)));
  };
};

export const sendKeyword = (keywords) => ({
  type: FIND_USER,
  payload: keywords,
});

export const sendEditUser = (userInfo) => ({
  type: EDIT_USER,
  payload: userInfo,
});