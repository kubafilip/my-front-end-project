import React from 'react'


export default function MusicTable(props) {
    return (
        <div className="musictable">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>
                        <button
                            onClick={() => props.sortBy('artist')}
                        >
                        Artist
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => props.sortBy('album')}
                        >
                        Album
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={() => props.sortBy('song')}
                        >
                        Song
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.artist}</td>
                            <td>{row.album}</td>
                            <td>{row.song}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}