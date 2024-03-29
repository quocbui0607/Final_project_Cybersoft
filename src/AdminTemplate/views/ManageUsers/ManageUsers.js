import React, { useEffect } from "react";
import CustomPaginationActionsTable from "../Table/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ModalEditUser from "./ModalEditUser/ModalEditUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchListUsersAction } from "./modules/actions";
import LoadingComponent from "../../../common/LoadingComponent/LoadingComponent";
import ModalDelete from "../Table/ModalDelete/ModalDelete";

const manageUserTableHeader = (
  <TableRow>
    <TableCell>STT</TableCell>
    <TableCell>Tài khoản</TableCell>
    <TableCell>Họ Tên</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Số điện thoại</TableCell>
    <TableCell>Mã người dùng</TableCell>
    <TableCell></TableCell>
  </TableRow>
);

function createData(
  id,
  taiKhoan,
  hoTen,
  email,
  soDt,
  maLoaiNguoiDung,
  matKhau
) {
  return { id, taiKhoan, hoTen, email, soDt, maLoaiNguoiDung, matKhau };
}

function ManageUsers(props) {
  const [page, setPage] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListUsersAction());
  }, [dispatch]);
  const loading = useSelector((state) => state.ManageUsersReducer.loading);
  const listUsers = useSelector((state) => state.ManageUsersReducer.listUsers);
  const keywords = useSelector((state) => state.ManageUsersReducer.keywords);

  let rows = [];
  if (listUsers) {
    listUsers.forEach((user, index) => {
      const { taiKhoan, hoTen, email, soDt, maLoaiNguoiDung, matKhau } = user;
      rows.push(
        createData(
          index + 1,
          taiKhoan,
          hoTen,
          email,
          soDt,
          maLoaiNguoiDung,
          matKhau
        )
      );
    });
  }

  const rowsBackUp = [...rows]

  if(keywords){
    rows = rows.filter(user => user.taiKhoan.indexOf(keywords) !== -1 )
  } else {
    rows = rowsBackUp
  }

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
          <div className='d-flex align-items-center justify-content-center'>
            <ModalEditUser userInfo={row}></ModalEditUser>

            <ModalDelete
              rowData={row}
              pageSelected="Manage Users"
            ></ModalDelete>
          </div>
        </TableCell>
      </TableRow>
    ));

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }
  
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
