import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*http://localhost:5000*/

function Song(props) {
    return (
    <tr>
        <td>{props.song.title}</td>
        <td>{props.song.artist}</td>
        <td><a href={props.song.link} target='_blank'>Link</a></td>
        <td>{props.song.averageRating}</td>
        <td>{props.song.user}</td>
        <td>{props.song.tags.join(", ")}</td>
        <td>
            <a href='#' onClick={() => {props.deleteSong(props.song._id)}}>delete</a>
        </td>
    </tr>
)}


function SongList() {
    const [songs, setSongs] = useState([]);
    const [searchTags, setSearchTags] = useState('');

    useEffect(() => {retrieveSongs();},[]);

    const retrieveSongs = () => {
        axios.get('/api/').then(res => {
            setSongs(res.data.sort((a,b) =>{ return b.averageRating - a.averageRating}));
        })
    };

    const findTag = () => {
        const tagList = searchTags.split(", ");
        let query = tagList.join('+');
        axios.get('/api/tags/?q='+query).then(res => {
            setSongs(res.data.sort((a,b) =>{ return b.averageRating - a.averageRating}))});
    }

    const deleteSong = (id) => {
        axios.delete('/api/'+id).then(res => {console.log(res.data);});
        setSongs(songs.filter(element => element._id!==id))
    }

    function changeSearchTags(e) {
        setSearchTags(e.target.value);
    }

    return (
    <div>
        <h3>Song List</h3>
        <div className='search-container'>
            <input type="text" className="search-bar" required value={searchTags} onChange={changeSearchTags} />
            <button className='search-button' type='button' onClick={findTag}>Search</button>
            <button className='search-button' type='button' onClick={retrieveSongs}>See All</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Link</th>
                    <th>Rating</th>
                    <th>Suggested By</th>
                    <th>Tags</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    songs.map((song) => <Song song={song} key={song._id} deleteSong={deleteSong}/>)
                }
            </tbody>
        </table>
    </div> 
    )
}

export default SongList;