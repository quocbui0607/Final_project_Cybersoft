import React, { useEffect } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendEditUser, sendEditUserAction } from "../modules/actions";

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

function ModalEditUser(props) {
  const editUserRedux = useSelector(
    (state) => state.ManageUsersReducer.editUser
  );
  const [editUser, setEditUser] = React.useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  useEffect(() => {
    setEditUser({ ...editUserRedux });
  }, [editUserRedux]);

  const dispatch = useDispatch();
  const editButtonStyle = useStyleEditButton();
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    dispatch(sendEditUser(props.userInfo));

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (event) => {
    setEditUser({ ...editUser, maLoaiNguoiDung: event });
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const ModalEditOnOpen = (editUser) => {
    const modalAddUser = (
      <div>
        <div className="form-group">
          <label htmlFor="taiKhoan">Tài khoản</label>
          <input
            type="text"
            className="form-control"
            name="taiKhoan"
            value={editUser.taiKhoan ? editUser.taiKhoan : ""}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={editUser.email ? editUser.email : ""}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="soDt">Số điện thoại</label>
          <input
            type="text"
            className="form-control"
            name="soDt"
            value={editUser.soDt ? editUser.soDt : ""}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hoTen">Họ tên</label>
          <input
            type="text"
            className="form-control"
            name="hoTen"
            value={editUser.hoTen ? editUser.hoTen : ""}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Mã loại người dùng</label>
          <DropdownButton
            title={
              editUser.maLoaiNguoiDung === "KhachHang"
                ? "Khách hàng"
                : "Quản trị viên"
            }
            onSelect={handleSelect}
            variant="primary"
            name="maLoaiNguoiDung"
          >
            <Dropdown.Item eventKey="KhachHang">Khách hàng</Dropdown.Item>
            <Dropdown.Item eventKey="QuanTri">Quản trị viên</Dropdown.Item>
          </DropdownButton>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            color="primary"
            className={editButtonStyle.button}
            startIcon={<EditIcon></EditIcon>}
            onClick={() => {
              dispatch(sendEditUserAction(editUser));
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
        <form>{modalAddUser}</form>
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
          {ModalEditOnOpen(editUser)}
        </Modal>
      )}
    </div>
  );
}

export default ModalEditUser;
