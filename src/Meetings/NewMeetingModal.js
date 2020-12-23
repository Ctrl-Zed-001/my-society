import React, { useState } from 'react'

const NewMeetingModal = ({ newMeeting }) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="modal fade" id="newMeetingModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Meeting</h5>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" required name="subject" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" required name="date" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Time</label>
                                <input type="time" required name="time" className="form-control" onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" onClick={() => newMeeting(form)} type="button" className="btn btn-custom">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMeetingModal
