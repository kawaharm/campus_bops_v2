import React from 'react';

import Header from "../components/Header";
import SchoolList from '../components/SchoolList';

function Schools() {

    const handleAddSchool = async (e) => {
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
            <h1 className="font-weight-light display-1 text-center">
                Select Your School
            </h1>
            <SchoolList />
            <form>
                <div class="form-group">
                    <label for="addSchool">Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="addSchool"
                        placeholder="Search Song" />
                </div>
                <button
                    onClick={handleAddSchool}
                    type="submit"
                    className="btn btn-primary">Search</button>
            </form>
        </>
    )
}

export default Schools;