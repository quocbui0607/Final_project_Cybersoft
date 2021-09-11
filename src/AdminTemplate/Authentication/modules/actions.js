import {
  AUTH_CLEAR_DATA,
  AUTH_FAILED,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from "./constants";
import api from "../../../utils/apiUtils";
import setHeader from "../../../utils/setHeader";

export const actAuthRequest = () => ({
  type: AUTH_REQUEST,
});

export const actAuthSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const actAuthFailed = (data) => ({
  type: AUTH_FAILED,
  payload: data,
});

const EXPIRE_TIME = 3600000;

export const actAuthLogin = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());

      const result = await api.post("QuanLyNguoiDung/DangNhap", user);
      if (result.statusText === "OK") {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: "Bạn không có quyền truy cập!",
            },
          }).catch((error) => {
            dispatch(actAuthFailed(error));
          });
        }
      }

      setHeader(result.data.accessToken);
      const date = new Date().getTime();
      const TIME_EXIPRE = date + EXPIRE_TIME;
      localStorage.setItem("EXPIRE_TIME", TIME_EXIPRE);
      dispatch(actSetTimeoutLogout(history, EXPIRE_TIME));

      localStorage.setItem("UserAdmin", JSON.stringify(result.data));

      history.replace("/admin/dashboard");

      dispatch(actAuthSuccess(result.data));
    } catch (error) {
      dispatch(actAuthFailed(error));
    }
  };
};

export const actLogout = (history) => {
  localStorage.removeItem("UserAdmin");
  history.replace("/authentication");
  return { type: AUTH_CLEAR_DATA };
};

const actSetTimeoutLogout = (history, expTimeout) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogout(history));
    }, expTimeout);
  };
};

export const actTryLogin = (history) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("UserAdmin"));
    if (!user) {
      return;
    }

    const exp = localStorage.getItem("EXPIRE_TIME");
    const date = new Date().getTime();
    if (date > exp) {
      dispatch(actLogout(history));
      return;
    }
    const time_remain = exp - date;
    dispatch(actSetTimeoutLogout(history, time_remain));
    setHeader(user.accessToken);
    dispatch(dispatch(actAuthSuccess(user)));
  };
};
