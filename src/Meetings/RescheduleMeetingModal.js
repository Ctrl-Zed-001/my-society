import React, { useState } from 'react'

const RescheduleMeetingModal = ({ newSchedule }) => {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="modal fade" id="rescheduleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Reschedule Meeting</h5>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" name="date" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Time</label>
                            <input type="time" name="time" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" onClick={() => newSchedule(form)} type="button" className="btn btn-custom">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RescheduleMeetingModal
