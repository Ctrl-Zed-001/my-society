import React from 'react'
import dayjs from "dayjs"


const ComplainCard = ({ viewComplain, complain }) => {
    return (
        <div className="col-12 mb-3">
            <div data-bs-toggle="modal" data-bs-target="#viewComplainModal" onClick={() => viewComplain(complain)} className="complain_card card border-0 shadow-sm rounded bg-light">
                <div className="card-body">
                    <p className="mb-1">{complain.id}</p>
                    <p className="fw-bold mb-1">{complain.title}</p>
                    <p className="mb-1">{dayjs(complain.createdAt).format('DD-MMM-YYYY')}</p>
                    <p className="mb-1">From : 301</p>
                    <p className="mb-0">Status : <span className="text-danger">{complain.status}</span> </p>
                </div>
            </div>
        </div>
    )
}

export default ComplainCard
