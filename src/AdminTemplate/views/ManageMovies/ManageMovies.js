import React from "react";
import CustomPaginationActionsTable from "../Table/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalEditMovie from "./ModalEditMovie/ModalEditMovie";

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
  return {
    maPhim,
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    moTa,
    maNhom,
    ngayKhoiChieu: new Date(ngayKhoiChieu).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' }),
    danhGia,
  };
}

const rows = [
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
  createData(
    1322,
    "John Wick II",
    "john-wick-ii",
    "https://www.youtube.com/embed/XGk2EfbD_Ps",
    "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
    "GP09",
    "2021-08-28T20:55:10.05",
    10
  ),
];

function ManageMovies() {
  const [page, setPage] = React.useState(0);
  const tableBodyContent = rows
    .slice(page * 10, page * 10 + 10)
    .map((row, index) => (
      <TableRow key={index}>
        <TableCell style={{ width: 160, padding: 13 }}>{row.maPhim}</TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>
          {row.tenPhim}
        </TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>{row.ngayKhoiChieu}</TableCell>
        <TableCell style={{ width: 160, padding: 13 }}>{row.danhGia}</TableCell>
        <TableCell style={{ width: 80, padding: 13 }}>
          <ModalEditMovie></ModalEditMovie>
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
