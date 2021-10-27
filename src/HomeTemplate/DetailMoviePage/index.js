import "./detailMovie.scss";
import React, { Component } from "react";
import { actFetchDetailMovie } from "./modules/actions";
import { connect } from "react-redux";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent";
import RatingStar from "../../common/RatingStar";
import { Add, PlayArrow} from "@material-ui/icons";
import ModalVideo from "react-modal-video";
import YoutubeParser from "../../common/YoutubeIdParser";

class DetailMoviePage extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({isOpen: true})
  }
  // Chạy 1 lần duy nhất sau render
  componentDidMount() {
    // Nhận lại id từ url
    // console.log(this.props);
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
  }  

  renderTable = () => {
    const { data } = this.props;     
    return data?.lichChieu?.map((item) => {
      return (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <a href="#dat-ve" className="btn btn-warning">
              Đặt vé
            </a>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { loading, data } = this.props;    
    if (loading) return <LoadingComponent/>;
    return (
      <div className="detailMovie">
        <ModalVideo channel="youtube" 
        isOpen={this.state.isOpen}         
        controls={1}
        theme="dark"             
        videoId={data && YoutubeParser(data?.trailer)} 
        onClose={() => this.setState({isOpen: false})}/>
        <div className="container">         
          <div className="description row">            
            <div className="movieDesc col-md-6">
              <table className="table">
                <tbody>
                  <tr className="movie-title">
                    {data?.tenPhim.toUpperCase()}
                  </tr>
                  <tr className="movie-rating">
                    <RatingStar/>
                    <span> Released: <span className="date">{new Date(data?.ngayKhoiChieu).toLocaleDateString()}</span></span>
                    <span> IMDb: <span className="imdb">{data?.danhGia}</span></span>
                  </tr>
                  <tr className="movie-desc">
                    {data?.moTa}
                  </tr>   
                  <tr className="movie-btn">
                     <button className="play-btn" onClick={this.openModal}><PlayArrow/>Play</button>   
                     <button className="add-btn"><Add/> My List</button>
                  </tr>                                              
                </tbody>
              </table>
            </div>
            <div className="moviePic col-md-6">
              <img className="img-fluid" src={data && data.hinhAnh} alt="" />
            </div>
          </div>

          <div className="schedule row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cụm rạp</th>
                    <th>Tên rạp</th>
                    <th>Ngày chiếu</th>
                    <th>Giờ chiếu</th>
                  </tr>
                </thead>
                {/* Lịch Chiếu */}
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
