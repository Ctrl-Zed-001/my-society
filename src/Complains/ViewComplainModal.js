import dayjs from 'dayjs'
import React from 'react'

const ViewComplainModal = ({ complain }) => {
    return (
        <div className="modal fade" id="viewComplainModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{complain.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p className="mb-1">{dayjs(complain.date).format('DD-MMM-YYYY')}</p>
                        <p className="fw-bold mb-3 text-danger">{complain.status}</p>
                        <p className="text-justify">
                            {complain.detail}
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

export default ViewComplainModal
