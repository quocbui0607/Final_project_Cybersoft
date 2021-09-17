import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import { sendAddUserAction } from "../../ManageUsers/modules/actions";
import { useDispatch, useSelector } from "react-redux";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    width: "50%",
    maxWidth: "800px",
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStylesModal = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStyleAddButton = makeStyles((theme) => ({
  button: {
    margin: 0,
    backgroundColor: "green",
    alignSelf: "end",
    "&:hover": {
      backgroundColor: alpha("#008000", 0.8),
    },
  },
}));

export default function ModalAdd(props) {
  const addButtonStyle = useStyleAddButton();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ModalAddOnOpen = () => {
    const newUserFailed = useSelector(
      (state) => state.ManageUsersReducer.newUser
    );

    const [newUser, setNewUser] = useState({
      taiKhoan: newUserFailed?.taiKhoan ? newUserFailed?.taiKhoan : "",
      matKhau: newUserFailed?.matKhau ? newUserFailed?.matKhau : "",
      email: newUserFailed?.email ? newUserFailed?.email : "",
      soDt: newUserFailed?.soDt ? newUserFailed?.soDt : "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: newUserFailed?.hoTen ? newUserFailed?.hoTen : "",
      error: {
        taiKhoanErr: false,
        matKhauErr: false,
        emailErr: false,
        soDtErr: false,
      },
      valid: false,
    });

    const modalOpenStyle = useStylesModal();
    const [modalStyle] = React.useState(getModalStyle);

    const { rows } = props;

    if (props.pageSelected === "Manage Users") {
      const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(String(email).toLowerCase());
      };

      const checkValidPassword = (password) => {
        if (
          !password.match(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,8})$/
          )
        ) {
          return true;
        }
        return false;
      };

      const checkFormValid = () => {
        return (
          newUser.taiKhoan.length &&
          newUser.matKhau.length &&
          newUser.soDt.length &&
          newUser.email.length
        );
      };

      const handleOnChange = (e) => {
        let matKhauErr = false;
        let emailErr = false;
        let soDtErr = false;
        const { name, value } = e.target;
        const taiKhoanErr = rows.find(
          (item) => item.taiKhoan.toLowerCase() === value.trim().toLowerCase()
        )
          ? true
          : false;
        if (name === "matKhau") {
          matKhauErr = checkValidPassword(value);
        } else if (name === "email") {
          emailErr = validateEmail(value);
        } else if (name === "soDt") {
          soDtErr = value.length !== 10;
        }
        setNewUser({
          ...newUser,
          [name]: value,
          error: {
            ...newUser.error,
            taiKhoanErr,
            matKhauErr,
            emailErr,
            soDtErr,
          },
          valid:
            !taiKhoanErr &&
            !matKhauErr &&
            !emailErr &&
            !soDtErr &&
            checkFormValid(),
        });
      };
      const handleAddUser = (newUser) => {
        const {
          taiKhoan,
          matKhau,
          email,
          maLoaiNguoiDung,
          maNhom,
          soDt,
          hoTen,
        } = newUser;
        const payload = {
          taiKhoan,
          matKhau,
          email,
          soDt,
          maNhom,
          maLoaiNguoiDung,
          hoTen,
        };
        dispatch(sendAddUserAction(payload));
      };
      const modalAddUser = (
        <div>
          {props.renderNoti}
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài khoản</label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              aria-describedby="taiKhoanHelp"
              placeholder="Nhập tài khoản"
              value={newUser.taiKhoan}
              onChange={handleOnChange}
            />
            {newUser.error.taiKhoanErr && (
              <small id="taiKhoanHelp" className="form-text text-danger">
                Tài khoản đã tồn tại
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              name="matKhau"
              aria-describedby="matKhauHelp"
              maxLength="8"
              placeholder="Nhập mật khẩu"
              value={newUser.matKhau}
              onChange={handleOnChange}
            />
            {newUser.error.matKhauErr && (
              <small id="matKhauHelp" className="form-text text-danger">
                Mật khẩu phải có 6-8 kí tự và phải có chữ, số, chữ in hoa và
                không chứa kí tự đặc biệt.
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Nhập email"
              value={newUser.email}
              onChange={handleOnChange}
            />
            {newUser.error.emailErr && (
              <small id="emailHelp" className="form-text text-danger">
                Email không đúng format.
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="soDt">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              name="soDt"
              placeholder="Nhập số điện thoại"
              maxLength="10"
              aria-describedby="soDtHelp"
              value={newUser.soDt}
              onChange={handleOnChange}
            />
            {newUser.error.soDtErr && (
              <small id="soDtHelp" className="form-text text-danger">
                Số điện thoại phải có 10 số.
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="hoTen">Họ tên</label>
            <input
              type="text"
              className="form-control"
              name="hoTen"
              placeholder="Nhập họ tên"
              value={newUser.hoTen}
              onChange={handleOnChange}
            />
          </div>
          <hr></hr>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="primary"
              className={addButtonStyle.button}
              startIcon={<AddIcon></AddIcon>}
              disabled={!newUser.valid}
              onClick={() => handleAddUser(newUser)}
            >
              Thêm
            </Button>
          </div>
        </div>
      );
      return (
        <div style={modalStyle} className={modalOpenStyle.paper}>
          <div>
            <h2 className="font-weight-bold text-uppercase">Thêm người dùng</h2>
          </div>
          <hr></hr>
          <form>{modalAddUser}</form>
        </div>
      );
    } else if (props.pageSelected === "Manage Movie") {
      const modalAddMovie = (
        <div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <label htmlFor="maPhim">Mã phim</label>
              <input
                type="text"
                className="form-control"
                id="maPhim"
                placeholder="Nhập mã phim"
              />
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="tenPhim">Tên phim</label>
              <input
                type="text"
                className="form-control"
                id="matKhau"
                placeholder="Nhập tên phim"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <label htmlFor="biDanh">Bí danh</label>
              <input
                type="text"
                className="form-control"
                id="biDanh"
                placeholder="Nhập bí danh"
              />
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="trailer">Trailer</label>
              <input
                type="text"
                className="form-control"
                id="trailer"
                placeholder="Nhập trailer link"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <label htmlFor="hinhAnh">Hình ảnh</label>
              <input
                type="text"
                className="form-control"
                id="hinhAnh"
                placeholder="Nhập hình ảnh"
              />
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="maNhom">Mã nhóm</label>
              <input
                type="text"
                className="form-control"
                id="maNhom"
                value="GT09"
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="moTa">Mô tả</label>
            <textarea
              type="text"
              className="form-control"
              id="moTa"
              rows="4"
              placeholder="Nhập mô tả"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ngayKhoiChieu">Ngày khởi chiếu</label>
            <input type="text" className="form-control" id="ngayKhoiChieu" />
          </div>
          <div className="form-group">
            <label htmlFor="danhGia">Đánh giá</label>
            <input type="text" className="form-control" id="danhGia" />
          </div>
          <hr></hr>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="primary"
              className={addButtonStyle.button}
              startIcon={<AddIcon></AddIcon>}
              type="submit"
            >
              Thêm
            </Button>
          </div>
        </div>
      );

      return (
        <div style={modalStyle} className={modalOpenStyle.paper}>
          <div>
            <h2 className="font-weight-bold text-uppercase">Thêm phim</h2>
          </div>
          <hr></hr>
          <form>{modalAddMovie}</form>
        </div>
      );
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={addButtonStyle.button}
        startIcon={<AddIcon></AddIcon>}
        onClick={() => handleOpen()}
      >
        {props.pageSelected === "Manage Users"
          ? "Thêm người dùng"
          : "Thêm phim"}
      </Button>
      <Modal open={open} onClose={() => handleClose()}>
        {ModalAddOnOpen()}
      </Modal>
    </div>
  );
}
