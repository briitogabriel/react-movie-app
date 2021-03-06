import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCards/MovieCard';


class MovieList extends Component {
    state = {
        movieList: [],
        searchTerm: ''
    }

    search = event => {
        event.preventDefault();
        axios.get(`https://www.omdbapi.com/?apikey=d30e4bc9&s=${this.state.searchTerm}&plot=full`)
        .then(res => res.data)
        .then(res => {
            const movieList = res.Search.map(movie => movie.imdbID);
            this.setState({ movieList })
        })
    }

    handleChange = event =>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        const { movieList } = this.state;

        return (
            <div>
                <form onSubmit={this.search}>
                    <input placeholder="Search for a movie" onChange={this.handleChange} />
                    <button type="submit">Buscar</button>
                </form>

                {
                    movieList.length > 0 ?
                        (movieList.map(movie => 
                            (<MovieCard movieID={movie} key={movie} />))
                    ) : (
                        <p>Couldn't find any movie. Please search again.</p>)
                }
            </div>
        )
    }
}

export default MovieList;