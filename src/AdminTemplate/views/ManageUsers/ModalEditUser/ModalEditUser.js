import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { Dropdown, DropdownButton } from "react-bootstrap";

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

export default function ModalEditUser(props) {
  const { userInfo } = props;
  const editButtonStyle = useStyleEditButton();
  const modalOpenStyle = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);
  const [selectedDropDown, setDropdownValue] = React.useState(userInfo.maLoaiNguoiDung);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (event) =>{
    setDropdownValue(event)
  }

  const ModalEditOnOpen = (userInfo) => {
    const modalAddUser = (
      <div>
        <div className="form-group">
          <label htmlFor="taiKhoan">Tài khoản</label>
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            value={userInfo.taiKhoan}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userInfo.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="soDt">Số điện thoại</label>
          <input
            type="text"
            className="form-control"
            id="soDt"
            value={userInfo.soDt}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hoTen">Họ tên</label>
          <input
            type="text"
            className="form-control"
            id="hoTen"
            value={userInfo.hoTen}
          />
        </div>
        <div className="form-group">
          <label>Mã loại người dùng</label>
          <DropdownButton
            title={selectedDropDown === 'KhachHang' ? "Khách hàng" : "Quản trị viên"}
            onSelect={handleSelect}
            variant="primary"
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
        onClick={handleOpen}
      ></Button>
      <Modal open={open} onClose={handleClose}>
        {ModalEditOnOpen(userInfo)}
      </Modal>
    </div>
  );
}
