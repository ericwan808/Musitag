import React, { useState } from 'react';
import axios from 'axios';
/*http://localhost:5000*/

function AddSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [link, setLink] = useState('');
    const [rating, setRating] = useState(10);
    const [user, setUser] = useState('');
    const [customTag, setCustomTag] = useState('');

    const onSubmit = () => {
        let tagList = [];
        for(let i=1; i<25; i++){
            let checkbox = document.getElementById(i+'');
            if(checkbox.checked){
                tagList.push(checkbox.value);
            }
        }
        /*tagList.sort();*/
        const newSong = {
            "title": title,
            "artist": artist,
            "link": link,
            "rating": Number(rating),
            "user": user,
            "tags": tagList
        }
        
        axios.post('/api/add',newSong).then(res => console.log(res));
        setTitle('');
        setArtist('');
        setLink('');
        setRating(10);
        setUser('');
        setCustomTag('');
        for(let i=1; i<25; i++){
            let checkbox = document.getElementById(i+'');
            if(checkbox.checked){
                checkbox.checked = false;
            }
        }
    }

    function changeTitle(e) {
        setTitle(e.target.value);
    }

    function changeArtist(e) {
        setArtist(e.target.value);
    }

    function changeCustomTag(e) {
        setCustomTag(e.target.value);
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
            <div className='form'>
                <div className="form-group">
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
                        <label>Suggested By: </label>
                        <input type="text" required value={user} onChange={changeUser} />
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
                </div>
                <div className='form-group'>
                    <div className='tag-type'>
                        <label className="tag-name">Genre:</label>
                        <div className='tag'>
                            <label>Classical</label>
                            <input type="checkbox" value="Classical" id="1"/>
                        </div>
                        <div className='tag'>
                            <label>Pop</label>
                            <input type="checkbox" value="Pop" id="2"/>
                        </div>
                        <div className='tag'>
                            <label>Rock</label>
                            <input type="checkbox" value="Rock" id="3"/>
                        </div>
                        <div className='tag'>
                            <label>Soundtrack</label>
                            <input type="checkbox" value="Soundtrack" id="4"/>
                        </div>
                        <div className='tag'>
                            <label>Folk</label>
                            <input type="checkbox" value="Folk" id="5"/>
                        </div>
                        <div className='tag'>
                            <label>Electronic</label>
                            <input type="checkbox" value="Electronic" id="6"/>
                        </div>
                        <div className='tag'>
                            <label>Rap</label>
                            <input type="checkbox" value="Rap" id="7"/>
                        </div>
                    </div>
                    <div className='tag-type'>
                        <label className="tag-name">Sub-Genre:</label>
                        <div className='tag'>
                            <label>Symphony</label>
                            <input type="checkbox" value="Symphony" id="8"/>
                        </div>
                        <div className='tag'>
                            <label>Concerto</label>
                            <input type="checkbox" value="Concerto" id="9"/>
                        </div>
                        <div className='tag'>
                            <label>Solo</label>
                            <input type="checkbox" value="Solo" id="10"/>
                        </div>
                        <div className='tag'>
                            <label>Etude</label>
                            <input type="checkbox" value="Etude" id="11"/>
                        </div>
                        <div className='tag'>
                            <label>Heavy Metal</label>
                            <input type="checkbox" value="Heavy Metal" id="12"/>
                        </div>
                        <div className='tag'>
                            <label>East Asian Pop</label>
                            <input type="checkbox" value="East Asian Pop" id="13"/>
                        </div>
                    </div>
                    <div className='tag-type'>
                        <label className="tag-name">Vibe:</label>
                        <div className='tag'>
                            <label>Epic</label>
                            <input type="checkbox" value="Epic" id="14"/>
                        </div>
                        <div className='tag'>
                            <label>Militaristic</label>
                            <input type="checkbox" value="Militaristic" id="15"/>
                        </div>
                        <div className='tag'>
                            <label>Upbeat</label>
                            <input type="checkbox" value="Upbeat" id="16"/>
                        </div>
                        <div className='tag'>
                            <label>Melodic</label>
                            <input type="checkbox" value="Melodic" id="17"/>
                        </div>
                        <div className='tag'>
                            <label>Spiritual</label>
                            <input type="checkbox" value="Spiritual" id="18"/>
                        </div>
                        <div className='tag'>
                            <label>Calm</label>
                            <input type="checkbox" value="Calm" id="19"/>
                        </div>
                        <div className='tag'>
                            <label>Melancholic</label>
                            <input type="checkbox" value="Melancholic" id="20"/>
                        </div>
                        <div className='tag'>
                            <label>Dark</label>
                            <input type="checkbox" value="Dark" id="21"/>
                        </div>
                    </div>
                    <div className='tag-type'>
                        <label className="tag-name">Other:</label>
                        <div className='tag'>
                            <label>Certified-Banger</label>
                            <input type="checkbox" value="Certified-Banger" id="22"/>
                        </div>
                        <div className='tag'>
                            <label>Acoustic</label>
                            <input type="checkbox" value="Acoustic" id="23"/>
                        </div>
                        <div className='tag'>
                            <label>Custom</label>
                            <input id="custom-tag-input" type="text" value={customTag} onChange={changeCustomTag}/>
                            <input type="checkbox" value={customTag} id="24"/>
                        </div>
                    </div>
                </div>
                <div className='form-button-container'>
                    <input type="button" value="Add Song" className="form-button" onClick={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default AddSong;