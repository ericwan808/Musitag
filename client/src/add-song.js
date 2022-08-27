import React, { useState } from 'react';
import axios from 'axios';

function AddSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState('');

    const onSubmit = () => {
        const tagList = tags.split(', ');
        const newSong = {
            "title": title,
            "artist": artist,
            "link": link,
            "tags": tagList
        }
        
        axios.post("/api/add",newSong).then(res => console.log(res));
        setTitle('');
        setArtist('');
        setLink('');
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
                    <label>Tags: </label>
                    <input type="text" required value={tags} onChange={changeTags} />
                </div>

                <input type="button" value="Add Song" className="form-button" onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default AddSong;