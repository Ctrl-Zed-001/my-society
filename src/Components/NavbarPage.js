import React from 'react'
import { Link } from "react-router-dom"

const NavbarPage = ({ page }) => {
    return (
        <div className="navbar_page p-4 pt-1">
            <div className="row mb-4">
                <div className="col-2">
                    <Link to="/"><i className="bi bi-arrow-left-short fs-1 text-white"></i></Link>
                </div>
                <div className="col-7 text-center">
                    <h5 className="fw-bold mt-2">{page}</h5>
                </div>
            </div>

        </div>
    )
}

export default NavbarPage
