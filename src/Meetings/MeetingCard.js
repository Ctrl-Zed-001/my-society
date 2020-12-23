import React from 'react'
import dayjs from 'dayjs'

const MeetingCard = ({ meet, selectMeeting }) => {
    return (
        <div className="col-12 mb-3">
            <div className="card border-0 shadow-sm rounded">

                <div className="card-body bg-light">
                    <div className="dropdown float-end">
                        <i className="bi bi-three-dots-vertical dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><p onClick={() => selectMeeting(meet)} data-bs-toggle="modal" data-bs-target="#rescheduleModal" className="dropdown-item mb-0 text-dark fw-bold">Reschedule</p></li>
                            <li><p className="dropdown-item mb-0 text-danger fw-bold">Cancel</p></li>
                        </ul>
                    </div>
                    <h6 className="fw-bold">{meet.subject}</h6>
                    <p className="mb-1">{dayjs(meet.date_time).format('DD-MMM-YYYY hh:mm a')}</p>
                    <p className="text-end mb-0 text-success fw-bold">Active</p>
                </div>
            </div>
        </div>
    )
}

export default MeetingCard
