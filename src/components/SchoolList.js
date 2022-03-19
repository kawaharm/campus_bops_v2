import React, { useEffect, useContext } from 'react';
import { SchoolsContext } from '../context/CampusContext';
import SchoolFinder from "../api/SchoolFinder";



function SchoolList() {
    const { schools, setSchools } = useContext(SchoolsContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get all schools from server
                const response = await SchoolFinder.get("/")
                // Store school list in state
                console.log(response)
                // setSchools(response.data.data.restaurants);
            } catch (err) {
                console.log('ERROR: ', err)
            }
        };

        fetchData();
    }, [])

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">School</th>
                    </tr>
                </thead>
                <tbody>
                    {/* && Means will only render if schools exists */}
                    {/* {schools && schools.map(school => {
                        return (
                            <tr key={school.id}>
                                <td>{school.name}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default SchoolList;