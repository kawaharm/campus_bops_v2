import React, { useEffect, useState } from 'react';
import SongFinder from '../api/SongFinder';


function SongSearch() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const handleSongSearch = async (e) => {
        e.preventDefault();
        try {
            const searchedSong = await SongFinder.post(`/search`, {
                title,
            })
            console.log(searchedSong.data.song)
            setSearchResults(searchedSong.data.song);
        } catch (err) {
            console.log(err);
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
                        className="form-control"
                        id="songTitle"
                        placeholder="Search Song" />
                </div>
                <button
                    onClick={handleSongSearch}
                    type="submit"
                    className="btn btn-primary">Search</button>
            </form>
            <div className="row row-cols-3 mb-2">
                {searchResults && searchResults.map(result => {
                    return (
                        <div
                            key={result.id}
                            className="card text-white bg-success my-3 me-4"
                            style={{ maxWidth: "30%" }}>
                            <img className="card-img-top my-3" src={result.albumCover} alt="album cover" />
                            <div className="card-body">
                                <h3 className="card-title">Title: {result.title}</h3>
                                <h5 className="card-title">Artist: {result.artist}</h5>
                                <h5 className="card-text">Album: {result.album}</h5>
                                <div className="card-title">
                                    <iframe
                                        src={`https://open.spotify.com/embed/track/${result.songPlayerId}`}
                                        width="300"
                                        height="80"
                                        frameborder="0"
                                        allowtransparency="true"
                                        allow="encrypted-media" />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="btn btn-primary px-3"
                                    style={{ width: "30%" }}>Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default SongSearch;