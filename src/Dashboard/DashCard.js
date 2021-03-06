import React from 'react'
import { Link } from "react-router-dom"

const DashCard = ({ link, icon, name }) => {
    return (
        <div className="col-6 mb-4">
            <Link to={link}>
                <div className="dash_card shadow-sm p-3 text-center">
                    <img className="img-fluid" type="lazy" alt="complain" src={`/icons/${icon}`} />
                    <p className="fw-bold mb-0 mt-2">{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default DashCard
