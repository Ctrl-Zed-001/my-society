import dayjs from 'dayjs'
import React from 'react'

const NoticeCard = ({ notice, viewNotice, index, deleteNotice }) => {
    return (
        <div className="col-12 notice_card mb-3">
            <div className="card border-0 shadow-sm rounded">
                <div className="card-body bg-light">
                    <div className="dropdown float-end">
                        <i className="bi bi-three-dots-vertical dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>

                        <ul className="dropdown-menu shadow border-0" aria-labelledby="dropdownMenuButton">
                            <li><p data-bs-toggle="modal" data-bs-target="#viewNoticeModal" onClick={() => viewNotice(notice)} className="dropdown-item mb-0 text-dark fw-bold">View</p></li>
                            <li><p onClick={() => deleteNotice(notice._id, index)} className="dropdown-item mb-0 text-danger fw-bold">Detele</p></li>
                        </ul>
                    </div>
                    <h6 className="fw-bold">{notice.title}</h6>
                    <p className="mb-1">{dayjs(notice.updatedAt).format('DD-MMM-YYYY hh:mm a')}</p>
                </div>
            </div>
        </div>
    )
}

export default NoticeCard
