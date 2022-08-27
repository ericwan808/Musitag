import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Song(props) {
    return (
    <tr>
        <td>{props.song.title}</td>
        <td>{props.song.artist}</td>
        <td><a href={props.song.link} target='_blank'>Link</a></td>
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
            setSongs(res.data);
        })
    };

    const findTag = () => {
        const tagsLowerCase = searchTags.toLowerCase()
        const tagList = tagsLowerCase.split(", ");
        let query = tagList.join('+');
        axios.get('/api/tags/?q='+query).then(res => {
            setSongs(res.data)});
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
                    <th>Tags</th>
                    <th>Edit</th>
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