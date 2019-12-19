import React, {Component} from "react";
import "./styles/Music.css";
import MusicTable from "./MusicTable";

import data from "./data/songs.json";

class Music extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            direction: {
                artist: 'desc',
                album: 'desc',
                song: 'desc'
            }
        }

        this.sortBy = this.sortBy.bind(this)
    }

    sortAscending(str1, str2) {
        return str1 < str2 ? -1 : 1;
    }

    sortDescending(str1, str2) {
        return str1 > str2 ? -1 : 1;
    }

    sortBy(key) {
        console.log(key)
        console.log(this.state.direction)
        console.log(this.state.direction[key])
        this.setState({
            data: data.sort( (a,b) => {
                let str1 = a[key].toLowerCase();
                let str2 = b[key].toLowerCase();
              return this.state.direction[key] === 'asc' ? 
               this.sortDescending(str1,str2) : this.sortAscending(str1,str2);
            }),
            direction: {
                [key]: this.state.direction[key] === 'asc'
                ? 'desc' : 'asc' 
            }
        })
    }

    render() {
        return (
            <div className="music">
                You can sort table by artist, album or song.
                <MusicTable 
                data={this.state.data} 
                sortBy={this.sortBy}
                />
            </div>
        );
    }
}

export default Music;