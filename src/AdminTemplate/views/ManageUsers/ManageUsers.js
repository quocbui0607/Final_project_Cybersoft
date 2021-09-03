import React from "react";
import CustomPaginationActionsTable from "../Table/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalEditUser from "./ModalEditUser/ModalEditUser";


const manageUserTableHeader = (
  <TableRow>
    <TableCell>ID</TableCell>
    <TableCell>Tài khoản</TableCell>
    <TableCell>Họ Tên</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Số điện thoại</TableCell>
    <TableCell>Mã người dùng</TableCell>
    <TableCell></TableCell>
  </TableRow>
);

function createData(id, taiKhoan, hoTen, email, soDt, maLoaiNguoiDung) {
  return { id, taiKhoan, hoTen, email, soDt, maLoaiNguoiDung };
}

const rows = [
  createData(
    1,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "QuanTri"
  ),
  createData(
    2,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    3,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
  createData(
    15,
    "123@admin",
    "Nguyễn Tân A",
    "stringgsss@gmail.com",
    "120000003467",
    "KhachHang"
  ),
];


function ManageUsers(props) {
  const [page, setPage] = React.useState(0);
  

  const tableBodyContent = rows
    .slice(page * 10, page * 10 + 10)
    .map((row, index) => (
      <TableRow key={index}>
        <TableCell style={{ width: "20px", padding: 13 }}>{row.id}</TableCell>
        <TableCell style={{ width: 100, padding: 13 }}>
          {row.taiKhoan}
        </TableCell>
        <TableCell style={{ width: 120, padding: 13 }}>{row.hoTen}</TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>{row.email}</TableCell>
        <TableCell style={{ width: 80, padding: 13 }}>{row.soDt}</TableCell>
        <TableCell style={{ width: 120, padding: 13 }}>
          {row.maLoaiNguoiDung === "KhachHang" ? "Khách hàng" : "Quản trị viên"}
        </TableCell>
        <TableCell style={{ width: 80, padding: 13 }}>
          <ModalEditUser userInfo={row}></ModalEditUser>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          ></Button>
        </TableCell>
      </TableRow>
    ));

  return (
    <>
      <CustomPaginationActionsTable
        pageSelected="Manage Users"
        tableHeader={manageUserTableHeader}
        rowData={tableBodyContent}
        rows={rows}
        page={page}
        setPage={setPage}
      ></CustomPaginationActionsTable>
    </>
  );
}

export default ManageUsers;
