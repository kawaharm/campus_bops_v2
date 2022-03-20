import React from 'react';
import { useNavigate } from "react-router-dom";


function Categories({ categories }) {
    let navigate = useNavigate();

    const handleCategorySelect = (id) => {
        try {
            // Navigate to detail page
            navigate(`/categories/${id}`);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="row row-cols-3 mb-2">
            {categories && categories.map((category) => {
                return (
                    <div
                        key={category.id}
                        className="card text-white bg-primary mb-3 me-4"
                        style={{ maxWidth: "30%" }}>
                        <div className="card-header d-flex justify-content-between">
                            <span onClick={() => { handleCategorySelect(category.id) }}>{category.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;