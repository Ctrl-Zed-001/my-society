import React, { useState } from 'react'

const NewNoticeModal = ({ addNotice }) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="modal fade" id="newNoticeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Notice</h5>

                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" name="title" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Body</label>
                            <textarea name="body" id="" cols="30" rows="10" className="form-control" onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-custom" data-bs-dismiss="modal" onClick={() => addNotice(form)} >Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNoticeModal
