import React from 'react';

function Categories({ categories }) {
    return (
        <div className="row row-cols-3 mb-2">
            {categories.map((category) => {
                return (
                    <div
                        key={category.id}
                        className="card text-white bg-primary mb-3 me-4"
                        style={{ maxWidth: "30%" }}>
                        <div className="card-header d-flex justify-content-between">
                            <span>{category.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;