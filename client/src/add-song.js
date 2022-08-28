import React, { useState } from 'react';
import axios from 'axios';
/*http://localhost:5000*/

function AddSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [link, setLink] = useState('');
    const [rating, setRating] = useState(10);
    const [user, setUser] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');

    const onSubmit = () => {
        const tagList = tags.split(', ');
        const newSong = {
            "title": title,
            "artist": artist,
            "link": link,
            "rating": Number(rating),
            "user": user,
            "tags": tagList
        }
        
        axios.post("/api/add",newSong).then(res => console.log(res));
        setTitle('');
        setArtist('');
        setLink('');
        setRating(10);
        setUser('');
        setTags('');
    }

    function changeTitle(e) {
        setTitle(e.target.value);
    }

    function changeArtist(e) {
        setArtist(e.target.value);
    }

    function changeTags(e) {
        setTags(e.target.value);
    }

    function changeLink(e) {
        setLink(e.target.value);
    }

    function changeRating(e) {
        setRating(e.target.value);
    }

    function changeUser(e) {
        setUser(e.target.value);
    }

    return (
        <div>
            <h3>Add New Song</h3>
            <form className="form-group">
                <div className="form-input">
                    <label>Title: </label>
                    <input type="text" required value={title} onChange={changeTitle} />
                </div>
                <div className='form-input'>
                    <label>Artist: </label>
                    <input type="text" required value={artist} onChange={changeArtist} />
                </div>
                <div className='form-input'>
                    <label>Link: </label>
                    <input type="text" required value={link} onChange={changeLink} />
                </div>
                <div className='form-input'>
                    <label>Rating: </label>
                    <select required onChange={changeRating}>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label>Name: </label>
                    <input type="text" required value={user} onChange={changeUser} />
                </div>
                <div className='form-input'>
                    <label>Tags: </label>
                    <input type="text" required value={tags} onChange={changeTags} />
                </div>

                <input type="button" value="Add Song" className="form-button" onClick={onSubmit}/>
            </form>
            <label>{error}</label>
        </div>
    )
}

export default AddSong;