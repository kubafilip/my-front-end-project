import React, {Component} from "react";
import "./styles/Movie.css";
//import ReactDOM from "react-dom";


const Title = ({moviesCount}) => {
    return (
        <div>
            <div>
                <h1 style={{fontSize: '50px'}}>List of movies that you want to watch ({moviesCount})</h1>
            </div>
        </div>
    );
}

const MovieForm = ({addMovie}) => {
    let input;
    return (
        <form  onSubmit={ (e) => {
            e.preventDefault();
            addMovie(input.value);
            input.value = '';
        }}>
            <input className="movieForm" 
            style={{height: '40px', width: '180px', fontSize: '20px'}} 
            ref={node => {
                input = node;
            }}/>
            <br/>
        </form>

    );
}

const MovieInstance = ({movie, remove}) => {
    return (<li className="movie-list-item" onClick={() => {remove(movie.id)}}>{movie.text}</li>)
}

const MoviesList = ({movies, remove}) => {
    const movieNode = movies.map((movie) => {
       return (<MovieInstance movie={movie} key={movie.id} remove={remove}/>) 
    });

    return (<ol className="movie-list" style={{marginTop:'30px'}}>{movieNode}</ol>)
}

window.id = 0;
class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            watched: []
        }
        this.clearAll = this.clearAll.bind(this);
    }

    componentDidMount(){
        this.setState({data: this.state.data});
    }

    addMovie = val => {
        const movie ={text: val, id: window.id++};
        this.setState({data: [...this.state.data, movie]});
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((movie) => {
            if(movie.id !== id) return movie;
        });
        this.setState({data: remainder});
    }

    handleWatched(id){

        const remainder = this.state.data.filter((movie) => {
            if(movie.id !== id) return movie;
        });

        const movieWatched = this.state.data.filter((movie)=>{
            if(movie.id == id) return movie;
        })

        this.setState({data: remainder, 
            watched: [...this.state.watched, ...movieWatched]});
    }

    clearAll (){
        this.setState({watched: []});
    }

    render() {
        return (
            <div className="movie">
               <Title moviesCount={this.state.data.length}/>
               <MovieForm addMovie={this.addMovie}/>
                <MoviesList
                    movies={this.state.data}
                    remove={this.handleWatched.bind(this)}
                />
                <h1 style={{fontSize: '50px'}}>
                <p>Watched:</p>
                <button className="clearAllButton" onClick={this.clearAll}>Clear All</button>
                </h1>
                <br/>
                <MoviesList
                    movies={this.state.watched}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

//  ReactDOM.render(<Movie/>, document.getElementById('root'));

export default Movie;