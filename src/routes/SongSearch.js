import React, { useEffect, useState } from 'react';
import SongFinder from '../api/SongFinder';


function SongSearch() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");


    const handleSongSearch = async (e) => {
        e.preventDefault();
        try {
            const searchedSong = await SongFinder.get(`/search`, {
                title,
                artist,
                album
            })
            // Refresh page to render new review
            window.location.reload(false);
        } catch (err) {
            console.log('ERROR: ', err);
        }
    }

    return (
        <>
            <form>
                <div class="form-group">
                    <label for="songTitle">Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        class="form-control"
                        id="songTitle"
                        placeholder="Search Song" />
                </div>
                <div class="form-group">
                    <label for="songArtist">Artist</label>
                    <input
                        value={artist}
                        onChange={e => setArtist(e.target.value)}
                        type="text"
                        class="form-control"
                        id="songArtist"
                        placeholder="Search Artist" />
                </div>
                <div class="form-group">
                    <label for="songAlbum">Album</label>
                    <input
                        value={album}
                        onChange={e => setAlbum(e.target.value)}
                        type="text"
                        class="form-control"
                        id="songAlbum"
                        placeholder="Search Album" />
                </div>
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        </>
    )
}

export default SongSearch;