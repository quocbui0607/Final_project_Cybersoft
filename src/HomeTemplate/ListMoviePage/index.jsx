import "./listMovie.scss";
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LoadingComponent from "./../../common/LoadingComponent"
import MovieItem from "./MovieItem";
import { actFetchListMovie } from "./modules/actions"

class ListMovie extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    renderListMovie() {
        const { data, loading } = this.props;
        if(loading) return <div>Loading</div>
        return data?.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie}/>
        })
    }   
    render() {
        return (
            <div className="listMovie">                
                <div class="box">
                    <div className="row">
                        {this.renderListMovie()}
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,

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