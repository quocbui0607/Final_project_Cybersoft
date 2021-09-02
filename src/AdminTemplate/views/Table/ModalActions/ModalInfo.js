import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

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

export default function ModalOnOpen(props) {
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

  const modalAddUser = (
    <div>
      <div className="form-group">
        <label htmlFor="taiKhoan">Tài khoản</label>
        <input
          type="text"
          className="form-control"
          id="taiKhoan"
          aria-describedby="taiKhoanHelp"
          placeholder="Nhập tài khoản"
        />
        <small id="taiKhoanHelp" className="form-text text-muted">
          Tài khoản đã tồn tại
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="matKhau">Mật khẩu</label>
        <input
          type="password"
          className="form-control"
          id="matKhau"
          aria-describedby="matKhauHelp"
          placeholder="Nhập mật khẩu"
        />
        <small id="matKhauHelp" className="form-text text-muted">
          Mật khẩu phải có 6-8 kí tự và phải có chữ, số, chữ in hoa.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Nhập email"
        />
        <small id="emailHelp" className="form-text text-muted">
          Email không đúng format.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="soDt">Số điện thoại</label>
        <input
          type="text"
          className="form-control"
          id="soDt"
          placeholder="Nhập số điện thoại"
          aria-describedby="soDtHelp"
        />
        <small id="soDtHelp" className="form-text text-muted">
          Số điện thoại phải có 10 số.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          type="text"
          className="form-control"
          id="hoTen"
          placeholder="Nhập họ tên"
        />
      </div>
      <hr></hr>
      <div className="d-flex justify-content-end">
        <Button
          variant="contained"
          color="primary"
          className={props.addButtonStyle.button}
          startIcon={<AddIcon></AddIcon>}
          type="submit"
        >
          Add user
        </Button>
      </div>
    </div>
  );

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
          className={props.addButtonStyle.button}
          startIcon={<AddIcon></AddIcon>}
          type="submit"
        >
          Thêm phim
        </Button>
      </div>
    </div>
  );

  return (
    <div style={modalStyle} className={modalOpenStyle.paper}>
      <div>
        <h2 className="font-weight-bold text-uppercase">
          {props.pageSelected === "Manage Users" ? "Thêm người dùng" : "Thêm phim"}
        </h2>
      </div>
      <hr></hr>
      <form>
        {props.pageSelected === "Manage Users" ? modalAddUser : modalAddMovie}
      </form>
    </div>
  );
}
