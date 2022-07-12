import React from "react";

const GJNumberLabel = ({string, value}) => {

    return (
        <h5 className="card-title">{string}: {value ? value : "-"}</h5>
    )
}


export default GJNumberLabel;