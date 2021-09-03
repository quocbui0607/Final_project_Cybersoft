import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";

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

const useStyleEditButton = makeStyles((theme) => ({
  button: {
    margin: 0,
    backgroundColor: "primary",
    alignSelf: "end",
    "&:hover": {
      backgroundColor: alpha("#3f51b5", 0.8),
    },
  },
}));

export default function ModalEditMovie(props) {
  const editButtonStyle = useStyleEditButton();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ModalEditOnOpen = (movieInfo) => {
    const modalOpenStyle = useStylesModal();
    const [modalStyle] = React.useState(getModalStyle);
  
    const modalEditMovie = (
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
            className={editButtonStyle.button}
            startIcon={<EditIcon></EditIcon>}
            type="submit"
          >
            Cập nhật
          </Button>
        </div>
      </div>
    );
  
    return (
      <div style={modalStyle} className={modalOpenStyle.paper}>
        <div>
          <h2 className="font-weight-bold text-uppercase">
            Cập nhật thông tin
          </h2>
        </div>
        <hr></hr>
        <form>
          {modalEditMovie}
        </form>
      </div>
    );
  }

  return (
    <div className="d-inline-block mr-3">
      <Button
        variant="contained"
        color="primary"
        className={editButtonStyle.button}
        startIcon={<EditIcon></EditIcon>}
        onClick={handleOpen}
      >
      </Button>
      <Modal open={open} onClose={handleClose}>
        {ModalEditOnOpen()}
      </Modal>
    </div>
  );
}