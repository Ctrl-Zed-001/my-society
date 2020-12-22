import React, { useState } from 'react'

const NewComplainModal = ({ addComplain }) => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="modal fade" id="newComplainModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Complain</h5>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="Title" className="form-label">Title</label>
                            <input type="text" name="title" onChange={handleChange} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Details</label>
                            <textarea name="detail" onChange={handleChange} id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => addComplain(form)} type="button" data-bs-dismiss="modal" className="btn btn-custom">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewComplainModal
