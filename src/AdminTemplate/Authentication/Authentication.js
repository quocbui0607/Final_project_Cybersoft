import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actAuthLogin } from "./modules/actions";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent"
import { Redirect } from "react-router";

export default function Authentication(props) {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const loading = useSelector(state => state.AuthenticationReducer.loading)
  const error = useSelector(state => state.AuthenticationReducer.error)
  const dispatch = useDispatch()

  const login = (user, history) => {
    dispatch(actAuthLogin(user, history));
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(state, props.history);
  };

  const renderNoti = () => {
    if (error)
      return <div className="alert alert-danger">{error.response.data}</div>;
  };

  if(localStorage.getItem("UserAdmin")){
    return <Redirect to='/admin/dashboard'></Redirect>
}

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h3 className="text-center py-4">Authentication required</h3>
      {renderNoti()}
      <div className="w-50">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Tài khoản</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              placeholder="Nhập tài khoản"
              onChange={handleOnChange}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              name="matKhau"
              placeholder="Nhập mật khẩu"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
