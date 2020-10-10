import React from 'react';
import { Component } from 'react';
import axios from 'axios';

//Artigo para ciclos de vida do React:
// https://medium.com/creditas-tech/m%C3%A9todos-do-ciclo-de-vida-de-componentes-reactjs-um-mergulho-profundo-332ed7b3b782

//Fonte aplicação: https://www.florin-pop.com/blog/2019/02/react-movie-search-app/



class MovieCard extends Component {
    state = {
        movieData: {}
    };

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=d30e4bc9&i=${this.props.movieID}`)
        .then(res => res.data)
        .then(res => {
            this.setState({ movieData: res})
        })
    }

    render() {
        const {
            Title,
            Released,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;



        return (
            <div className = "movie-card-container">
                <div className = "image-container">
                    <div className = "bg-image" style={{backgroundImage: `url(${Poster})`}}>
                    </div>
                </div>
                <div className = "movie-info">
                    <h2>Movie details</h2>
                    <div>
                        <h1>{Title}</h1>
                        <small>Release Date: {Released}</small>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                </div>
            </div>
        );
    }
}

export default MovieCard;