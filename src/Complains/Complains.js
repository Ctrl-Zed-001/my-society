import React, { useState } from 'react'
import NavbarPage from '../Components/NavbarPage'
import ComplainCard from './ComplainCard'
import NewComplainModal from './NewComplainModal'
import ViewComplainModal from './ViewComplainModal'
import axios from "axios"
import { api } from "../Address"

const Complains = () => {

    const [selectedComplain, setSelectedComplain] = useState({})

    const viewComplain = (data) => {
        setSelectedComplain(data)
    }

    const addComplain = (newData) => {
        axios.post(`${api}/complain/new`, newData)
            .then(doc => console.log(doc.data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavbarPage page="complains" />
            <NewComplainModal addComplain={addComplain} />
            <ViewComplainModal selectedComplain={selectedComplain} />
            <div className="main_content">

                <div className="container-fluid">
                    <div className="row">
                        <ComplainCard viewComplain={viewComplain} />
                    </div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#newComplainModal" className="btn btn-custom rounded-pill shadow-sm fw-bold fab">New Complain</button>
            </div>
        </>
    )
}

export default Complains
