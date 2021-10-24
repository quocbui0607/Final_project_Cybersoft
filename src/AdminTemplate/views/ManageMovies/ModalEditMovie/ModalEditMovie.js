import React, { useEffect } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  sendEditMovie,
  sendEditMovieAction,
} from "../modules/actions";
import TextField from "@material-ui/core/TextField";
import "./modalEditMovie.scss";

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
  uploadBtn: {
    background: "green",
    marginLeft: "20px",
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
    <div style={{ marginBottom: 5 }} className="form-group w-50 pr-4">
      <label htmlFor="ngayKhoiChieu">Ngày khởi chiếu</label>
      <TextField
        name="ngayKhoiChieu"
        type="date"
        defaultValue={props.ngayKhoiChieu}
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
        props.setEditMovie({ ...props.editMovie, hinhAnh: file });
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

export default function ModalEditMovie(props) {
  const editMovieRedux = useSelector(
    (state) => state.ManageMoviesReducer.editMovie
  );

  const [editMovie, setEditMovie] = React.useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  const [previewURL, setPreviewURL] = React.useState();

  useEffect(() => {
    setEditMovie({ ...editMovieRedux });
  }, [editMovieRedux]);

  const dispatch = useDispatch();
  const editButtonStyle = useStyleEditButton();
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    dispatch(sendEditMovie(props.movieInfo));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (event) => {
    let { name, value } = event.target;
    if (name === "danhGia") {
      if (value >= 10) {
        value = 10;
      } else if (value <= 0) {
        value = 0;
      }
    }
    setEditMovie({ ...editMovie, [name]: value });
  };

  const ModalEditOnOpen = (movieInfo) => {
    const modalEditMovie = (
      <div>
        <div className="d-flex justify-content-between">
          <div style={{ marginBottom: 5 }} className="form-group w-50 pr-4">
            <label htmlFor="maPhim">Mã phim</label>
            <input
              type="text"
              className="form-control"
              name="maPhim"
              placeholder="Nhập mã phim"
              value={movieInfo.maPhim}
              disabled
            />
          </div>
          <div style={{ marginBottom: 5 }} className="form-group w-50 pl-4">
            <label htmlFor="tenPhim">Tên phim</label>
            <input
              type="text"
              className="form-control"
              name="tenPhim"
              placeholder="Nhập tên phim"
              value={movieInfo.tenPhim}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div style={{ marginBottom: 5 }} className="form-group w-50 pr-4">
            <label htmlFor="biDanh">Bí danh</label>
            <input
              type="text"
              className="form-control"
              name="biDanh"
              placeholder="Nhập bí danh"
              value={movieInfo.biDanh}
              disabled
            />
          </div>
          <div style={{ marginBottom: 5 }} className="form-group w-50 pl-4">
            <label htmlFor="trailer">Link trailer</label>
            <input
              type="text"
              className="form-control"
              name="trailer"
              placeholder="Nhập trailer link"
              value={movieInfo.trailer}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <DatePickers
            ngayKhoiChieu={movieInfo.ngayKhoiChieu}
            handleOnChange={handleOnChange}
          ></DatePickers>
          <div style={{ marginBottom: 5 }} className="form-group w-50 pl-4">
            <label style={{ marginBottom: 5 }} htmlFor="maNhom">
              Mã nhóm
            </label>
            <input
              type="text"
              className="form-control"
              name="maNhom"
              value={movieInfo.maNhom}
              disabled
            />
          </div>
        </div>
        <div style={{ marginBottom: 5 }} className="form-group">
          <label htmlFor="moTa">Mô tả</label>
          <textarea
            type="text"
            className="form-control"
            name="moTa"
            rows="4"
            placeholder="Nhập mô tả"
            value={movieInfo.moTa?.replace(/<[^>]*>/g, "")}
            onChange={handleOnChange}
          />
        </div>
        <div className="d-flex">
          <div style={{ marginBottom: 5 }} className="form-group w-50 pr-4">
            <label htmlFor="danhGia">Đánh giá</label>
            <input
              type="number"
              className="form-control"
              name="danhGia"
              value={movieInfo.danhGia}
              maxLength="2"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="hinhAnh">Hình ảnh</label>
              <div className="d-flex">
                <img
                  src={previewURL || movieInfo.hinhAnh}
                  style={{ width: 120, height: 120 }}
                  alt={movieInfo.hinhAnh}
                ></img>
                <div className="pl-2 d-flex flex-column align-content-center justify-content-center">
                  <FileUploadPage
                    setEditMovie={setEditMovie}
                    editMovie={editMovie}
                    setPreviewUrl={setPreviewURL}
                    previewURL={previewURL}
                  ></FileUploadPage>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            color="primary"
            className={editButtonStyle.button}
            startIcon={<EditIcon></EditIcon>}
            type="submit"
            onClick={() => {
              dispatch(sendEditMovieAction(editMovie));
              setOpen(false);
            }}
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
        <form>{modalEditMovie}</form>
      </div>
    );
  };

  return (
    <div className="d-inline-block mr-3">
      <Button
        variant="contained"
        color="primary"
        className={editButtonStyle.button}
        startIcon={<EditIcon></EditIcon>}
        onClick={() => handleOpen()}
      ></Button>
      {open && (
        <Modal open={open} onClose={() => handleClose()}>
          {ModalEditOnOpen(editMovie)}
        </Modal>
      )}
    </div>
  );
}
