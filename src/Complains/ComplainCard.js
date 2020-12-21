import React from 'react'

const ComplainCard = ({ viewComplain, ...data }) => {
    return (
        <div className="col-12">
            <div onClick={() => viewComplain(data)} className="complain_card card border-0 shadow-sm rounded bg-light">
                <div className="card-body">
                    <p className="mb-1">#1001</p>
                    <p className="fw-bold mb-1">Lift not working</p>
                    <p className="mb-1">Posted on : {Date()}</p>
                    <p className="mb-1">From : 301</p>
                    <p className="mb-0">Status : <span className="text-danger">Unresolved</span> </p>
                </div>
            </div>
        </div>
    )
}

export default ComplainCard
