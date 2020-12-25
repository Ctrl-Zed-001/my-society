import dayjs from 'dayjs'
import React from 'react'

const ViewNoticeModal = ({ selctedNotice }) => {
    return (
        <div className="modal fade" id="viewNoticeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{selctedNotice.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="fw-bold">{dayjs(selctedNotice.updatedAt).format('DD-MMM-YYYY hh:mm a')}</p>
                        <p className="text-justify">
                            {selctedNotice.body}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNoticeModal
