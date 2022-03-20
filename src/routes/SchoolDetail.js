import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SchoolsContext } from '../context/CampusContext';
import SchoolFinder from '../api/SchoolFinder';
import Categories from "./Categories"

function SchoolDetail(props) {
    const { id } = useParams();
    const { selectedSchool, setSelectedSchool } = useContext(SchoolsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await SchoolFinder.get(`/${id}`);
                setSelectedSchool(response.data);
                console.log(response.data.categories)
            } catch (err) {
                console.log('ERROR: ', err);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            {selectedSchool && (
                <>
                    <h1 className="text-center display-1">{selectedSchool.school.name}</h1>
                    <div className="mt-3">
                        <Categories categories={selectedSchool.categories} />
                    </div>
                </>
            )}
        </div>
    )
}

export default SchoolDetail
    ;