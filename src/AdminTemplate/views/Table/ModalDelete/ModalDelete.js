import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import { sendDeleteUserAction } from "../../ManageUsers/modules/actions";
import { sendDeleteMovieAction } from "../../ManageMovies/modules/actions";

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

const useStyleDeleteButton = makeStyles((theme) => ({
  button: {
    margin: 0,
    backgroundColor: "secondary",
    alignSelf: "end",
    "&:hover": {
      backgroundColor: alpha("#f50057", 0.8),
    },
  },
}));

function ModalDelete(props) {
  const dispatch = useDispatch();
  const deleteButtonStyle = useStyleDeleteButton();
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (props.pageSelected === "Manage Users") {
    const ModalDeleteOnOpen = (rowData) => {
      const modalDeleteUser = (
        <div>
          <div className="form-group">
            <p>
              Bạn có thực sự muốn xóa tài khoản: <b>{rowData.taiKhoan}</b>?
            </p>
          </div>

          <hr></hr>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="default"
              startIcon={<ClearIcon></ClearIcon>}
              onClick={() => handleClose()}
              className="mr-2"
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={deleteButtonStyle.button}
              startIcon={<DeleteIcon></DeleteIcon>}
              onClick={() => {
                dispatch(sendDeleteUserAction(rowData));
                setOpen(false);
              }}
            >
              Xóa
            </Button>
          </div>
        </div>
      );
      return (
        <div style={modalStyle} className={modalOpenStyle.paper}>
          <div>
            <h2 className="font-weight-bold text-uppercase">Xóa người dùng</h2>
          </div>
          <hr></hr>
          <form>{modalDeleteUser}</form>
        </div>
      );
    };
    return (
      <div className="d-inline-block mr-3">
        <Button
          variant="contained"
          color="secondary"
          className={deleteButtonStyle.button}
          startIcon={<DeleteIcon></DeleteIcon>}
          onClick={() => handleOpen()}
        ></Button>
        {open && (
          <Modal open={open} onClose={() => handleClose()}>
            {ModalDeleteOnOpen(props.rowData)}
          </Modal>
        )}
      </div>
    );
  } else if (props.pageSelected === "Manage Movies") {
    const ModalDeleteOnOpen = (rowData) => {
      const modalDeleteUser = (
        <div>
          <div className="form-group">
            <p>
              Bạn có thực sự muốn xóa tài khoản: <b>{rowData.tenPhim}</b>?
            </p>
          </div>

          <hr></hr>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="default"
              startIcon={<ClearIcon></ClearIcon>}
              onClick={() => handleClose()}
              className="mr-2"
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={deleteButtonStyle.button}
              startIcon={<DeleteIcon></DeleteIcon>}
              onClick={() => {
                dispatch(sendDeleteMovieAction(rowData));
                setOpen(false);
              }}
            >
              Xóa
            </Button>
          </div>
        </div>
      );
      return (
        <div style={modalStyle} className={modalOpenStyle.paper}>
          <div>
            <h2 className="font-weight-bold text-uppercase">Xóa phim</h2>
          </div>
          <hr></hr>
          <form>{modalDeleteUser}</form>
        </div>
      );
    };
    return (
      <div className="d-inline-block mr-3">
        <Button
          variant="contained"
          color="secondary"
          className={deleteButtonStyle.button}
          startIcon={<DeleteIcon></DeleteIcon>}
          onClick={() => handleOpen()}
        ></Button>
        {open && (
          <Modal open={open} onClose={() => handleClose()}>
            {ModalDeleteOnOpen(props.rowData)}
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalDelete;
