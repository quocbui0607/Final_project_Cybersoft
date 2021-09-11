import api from "../../../../utils/apiUtils";
import {
  EDIT_USER_FAILED,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
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

export const showLoadingEditUserAction = () => ({
  type: EDIT_USER_LOADING,
});

export const requestEditUserSuccessAction = (data) => ({
  type: EDIT_USER_SUCCESS,
  payload: data,
});

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
  };
  return (dispatch) => {
    dispatch(showLoadingEditUserAction());
    api
      .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", payloadEditUser)
      .then((res) => dispatch(requestEditUserSuccessAction(res.data)))
      .catch((err) => dispatch(requestEditUserFailAction(err)));
  };
};
