import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomPaginationActionsTable from "../Table/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ModalEditMovie from "./ModalEditMovie/ModalEditMovie";
import { fetchListMoviesAction } from "./modules/actions";
import LoadingComponent from "../../../common/LoadingComponent/LoadingComponent";
import ModalDelete from "../Table/ModalDelete/ModalDelete";

const manageMoviesTableHeader = (
  <TableRow>
    <TableCell>ID</TableCell>
    <TableCell>Tên phim</TableCell>
    <TableCell>Ngày khởi chiếu</TableCell>
    <TableCell>Đánh giá</TableCell>
    <TableCell style={{ width: 80, padding: 13 }}></TableCell>
  </TableRow>
);

function createData(
  maPhim,
  tenPhim,
  biDanh,
  trailer,
  hinhAnh,
  moTa,
  maNhom,
  ngayKhoiChieu,
  danhGia
) {
  const dataDate = new Date(ngayKhoiChieu);
  let date = dataDate.getDate()
  let month = dataDate.getMonth() + 1
  const year = dataDate.getFullYear()
  if(date < 10) {
    date = '0' + date.toString()
  }
  if(month < 10) {
    month = '0' + month.toString()
  }
  const dateValue = `${year}-${month}-${date}`

  return {
    maPhim,
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    moTa,
    maNhom,
    ngayKhoiChieu: dateValue,
    danhGia,
  };
}

function ManageMovies() {
  const [page, setPage] = React.useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMoviesAction());
  }, [dispatch]);

  const loading = useSelector((state) => state.ManageMoviesReducer.loading);
  const listMovies = useSelector(
    (state) => state.ManageMoviesReducer.listMovies
  );

  const keywords = useSelector((state) => state.ManageMoviesReducer.keywords);

  let rows = [];
  if (listMovies) {
    listMovies.forEach((movie, index) => {
      const {
        maPhim,
        tenPhim,
        biDanh,
        trailer,
        hinhAnh,
        moTa,
        maNhom,
        ngayKhoiChieu,
        danhGia,
      } = movie;
      rows.push(
        createData(
          maPhim,
          tenPhim,
          biDanh,
          trailer,
          hinhAnh,
          moTa,
          maNhom,
          ngayKhoiChieu,
          danhGia
        )
      );
    });
  }

  const rowsBackUp = [...rows]

  if(keywords){
    rows = rows.filter(movies => movies.tenPhim.toLowerCase().indexOf(keywords.toLowerCase()) !== -1 )
  } else {
    rows = rowsBackUp
  }

  const tableBodyContent = rows
    .slice(page * 10, page * 10 + 10)
    .map((row, index) => (
      <TableRow key={index}>
        <TableCell style={{ width: 160, padding: 13 }}>{row.maPhim}</TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>{row.tenPhim}</TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>
          {row.ngayKhoiChieu}
        </TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>{row.danhGia}</TableCell>
        <TableCell style={{ width: 80, padding: 13 }}>
          <ModalEditMovie movieInfo={row}></ModalEditMovie>
          <ModalDelete rowData={row}  pageSelected="Manage Movies"></ModalDelete>
        </TableCell>
      </TableRow>
    ));

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }

  return (
    <>
      <CustomPaginationActionsTable
        pageSelected="Manage Movies"
        tableHeader={manageMoviesTableHeader}
        rowData={tableBodyContent}
        rows={rows}
        page={page}
        setPage={setPage}
      ></CustomPaginationActionsTable>
    </>
  );
}

export default ManageMovies;
