import React from "react";

const Lorem = ({ item }) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="lorem-box bg-white rounded shadow h-100 p-2 text-end">
                <p className="text">{item}</p>
            </div>
        </div>
    );
};

export default Lorem;
