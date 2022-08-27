import React, { useState } from 'react';
import axios from 'axios';

function AddSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [tags, setTags] = useState('');

    const onSubmit = () => {
        const tagList = tags.split(', ');
        const newSong = {
            "title": title,
            "artist": artist,
            "tags": tagList
        }
        
        axios.post("http://localhost:5000/api/add",newSong).then(res => console.log(res));
        setTitle('');
        setArtist('');
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
                    <label>Tags: </label>
                    <input type="text" required value={tags} onChange={changeTags} />
                </div>

                <input type="button" value="Add Song" className="form-button" onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default AddSong;
/*
export default class AddSong extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            artist: '',
            tags: '',
        }
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value});
    }

    onChangeArtist(e) {
        this.setState({ artist: e.target.value});
    }

    onChangeTags(e) {
        this.setState({ tags: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            tags: this.state.tags
        }

        axios.post('http://localhost:5000/songs/add', song).then( res => console.log(res.data));
        console.log(song);
        this.setState({
            title: '',
            artist: '',
            tags: ''
        })
    }

    render () {
        return (
            <div>
                <h3>Add New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" required className="form-control" value={this.state.title} onChange={this.onChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input type="text" required className="form-control" value={this.state.artist} onChange={this.onChangeArtist} />
                    </div>
                    <div className="form-group">
                        <label>Tags: </label>
                        <input type="text" required className='form-control' value={this.state.tags} onChange={this.onChangeTags} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Song" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
*/