import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import { sendAddUserAction } from "../../ManageUsers/modules/actions";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { sendAddMovieAction } from "../../ManageMovies/modules/actions";

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
const useStylesPicker = makeStyles((theme) => ({
  textField: {
    display: "block",
    width: "100%",
    border: "1px solid #ced4da",
    padding: "0 10px",
    borderRadius: ".25rem",
  },
}));

function DatePickers(props) {
  const classesPicker = useStylesPicker();

  return (
    <div style={{ marginBottom: 5 }} className="form-group w-100">
      <label htmlFor="ngayKhoiChieu">Ngày khởi chiếu</label>
      <TextField
        format={"DD/MM/YYYY"}
        name="ngayKhoiChieu"
        type="date"
        className={classesPicker.textField}
        onChange={props.handleOnChange}
      />
    </div>
  );
}

function FileUploadPage(props) {
  const changeHandler = (event) => {
    if (event.target.files.length) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        props.setPreviewUrl(e.target.result);
        props.setNewMovie({ ...props.newMovie, hinhAnh: file });
      };
    }
  };

  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <input
          type="file"
          name="hinhAnh"
          onChange={changeHandler}
          accept="image/png, image/jpeg, image/gif, image/jpg"
        />
      </div>
    </>
  );
}

export default function ModalAdd(props) {
  const addButtonStyle = useStyleAddButton();

  const newUserFailed = useSelector(
    (state) => state.ManageUsersReducer.newUser
  );

  const newMoviesFailed = useSelector(
    (state) => state.ManageMoviesReducer.newMovie
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

  const [newMovie, setNewMovie] = useState({
    maPhim: newMoviesFailed?.maPhim || "",
    tenPhim: newMoviesFailed?.tenPhim || "",
    biDanh: newMoviesFailed?.biDanh || "",
    trailer: newMoviesFailed?.trailer || "",
    hinhAnh: newMoviesFailed?.hinhAnh || "",
    maNhom: "GP05",
    moTa: newMoviesFailed?.moTa || "",
    ngayKhoiChieu: newMoviesFailed?.ngayKhoiChieu || "",
    danhGia: newMoviesFailed?.danhGia || "",
  });
  const [previewURL, setPreviewURL] = useState();
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

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
    } else if (props.pageSelected === "Manage Movies") {
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({
          ...newMovie,
          [name]: value,
        });
      };

      const handleAddMovie = (newMovie) => {
        const {
          maPhim,
          tenPhim,
          biDanh,
          trailer,
          hinhAnh,
          moTa,
          ngayKhoiChieu,
          danhGia,
        } = newMovie;
        const date = ngayKhoiChieu.split("-");
        const datePayload = date[2] + "/" + date[1] + "/" + date[0];
        const payload = {
          maPhim: +maPhim,
          tenPhim: tenPhim,
          biDanh: biDanh,
          trailer: trailer,
          hinhAnh: hinhAnh,
          moTa: moTa,
          maNhom: "GP05",
          ngayKhoiChieu: datePayload,
          danhGia: +danhGia,
        };
        dispatch(sendAddMovieAction(payload));
      };
      const modalAddMovie = (
        <div>
          {props.renderNoti}
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <label htmlFor="maPhim">Mã phim</label>
              <input
                type="text"
                className="form-control"
                name="maPhim"
                placeholder="Nhập mã phim"
                value={newMovie.maPhim}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="tenPhim">Tên phim</label>
              <input
                type="text"
                className="form-control"
                name="tenPhim"
                placeholder="Nhập tên phim"
                value={newMovie.tenPhim}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <label htmlFor="biDanh">Bí danh</label>
              <input
                type="text"
                className="form-control"
                name="biDanh"
                placeholder="Nhập bí danh"
                value={newMovie.biDanh}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="trailer">Trailer</label>
              <input
                type="text"
                className="form-control"
                name="trailer"
                placeholder="Nhập trailer link"
                value={newMovie.trailer}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-50 pr-4">
              <div className="form-group">
                <DatePickers handleOnChange={handleOnChange}></DatePickers>
              </div>
            </div>
            <div className="form-group w-50 pl-4">
              <label htmlFor="maNhom">Mã nhóm</label>
              <input
                type="text"
                className="form-control"
                name="maNhom"
                value="GP05"
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="moTa">Mô tả</label>
            <textarea
              type="text"
              className="form-control"
              name="moTa"
              rows="4"
              placeholder="Nhập mô tả"
              value={newMovie.moTa}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="hinhAnh">Hình ảnh</label>
              <div className="d-flex">
                <img
                  src={previewURL || newMovie.hinhAnh}
                  style={{ width: 120, height: 120 }}
                  alt={newMovie.hinhAnh}
                ></img>
                <div className="pl-2 d-flex flex-column align-content-center justify-content-center">
                  <FileUploadPage
                    setNewMovie={setNewMovie}
                    newMovie={newMovie}
                    setPreviewUrl={setPreviewURL}
                    previewURL={previewURL}
                  ></FileUploadPage>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="danhGia">Đánh giá</label>
            <input
              type="number"
              className="form-control"
              name="danhGia"
              value={newMovie.danhGia}
              maxLength="2"
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
              type="submit"
              onClick={() => handleAddMovie(newMovie)}
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
      {open && (
        <Modal open={open} onClose={() => handleClose()}>
          {ModalAddOnOpen()}
        </Modal>
      )}
    </div>
  );
}
