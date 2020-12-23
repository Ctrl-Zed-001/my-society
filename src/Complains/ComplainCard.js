import React from 'react'
import dayjs from "dayjs"


const ComplainCard = ({ viewComplain, complain, resolve, deleteComplain }) => {
    return (
        <div className="col-12 mb-3">
            <div className="complain_card card border-0 shadow-sm rounded bg-light">

                <div className="card-body">
                    <div className="dropdown float-end">
                        <i className="bi bi-three-dots-vertical dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><p data-bs-toggle="modal" data-bs-target="#viewComplainModal" onClick={() => viewComplain(complain)} className="dropdown-item mb-0">View</p></li>
                            <li><p onClick={() => resolve(complain._id)} className="dropdown-item mb-0" >
                                {
                                    complain.status ? "Mark as unresolved" : "Mark as resolved"
                                }
                            </p></li>
                            <li><p onClick={() => deleteComplain(complain._id)} className="dropdown-item text-danger mb-0" >Delete</p></li>

                        </ul>
                    </div>
                    <p className="fw-bold mb-1">{complain.title}</p>
                    <p className="mb-1">{dayjs(complain.createdAt).format('DD-MMM-YYYY')}</p>
                    <p className="mb-1">From : 301</p>
                    <p className="mb-0 fw-bold">Status : <span className={complain.status ? "text-success" : "text-danger"}>
                        {complain.status ? "resolved" : "unresolved"}
                    </span> </p>
                </div>
            </div>
        </div>
    )
}

export default ComplainCard
