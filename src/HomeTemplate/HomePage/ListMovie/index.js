import "./listMovie.scss";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { connect } from 'react-redux';
import { actFetchListMovie } from "./modules/actions";
import LoadingComponent from "../../../common/LoadingComponent/LoadingComponent";
import Movie from "../Movie";

class ListMovie extends Component {
  componentDidMount() {
        this.props.fetchData();
  }
   renderListMovie() {
        const { data, loading } = this.props;
        if(loading) return <LoadingComponent/>
        return data?.map((movie) => {
            return <Movie key={movie.maPhim} movie={movie}/>
        })
    }   
  render(){
    return (    
    <>
     <div className="container-fluid">
          <span className="title text-white">Continue to watch for...</span>   
          <OwlCarousel
        items={4}
        className="owl-carousel owl-theme owl-carousel-custom"
        loop={false}
        nav
        margin={8}
      >
       {this.renderListMovie()}       
      </OwlCarousel>         
      </div>          
    </>
  );
  }  
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieHomeReducer.loading,
        data: state.listMovieHomeReducer.data,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(actFetchListMovie());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
