import React, { useState, useEffect } from 'react'
import NavbarPage from '../Components/NavbarPage'
import ComplainCard from './ComplainCard'
import NewComplainModal from './NewComplainModal'
import ViewComplainModal from './ViewComplainModal'
import axios from "axios"
import { api } from "../Address"
import { useDispatch, useSelector } from "react-redux"

const Complains = () => {

    const [selectedComplain, setSelectedComplain] = useState({})
    const complains = useSelector(state => state.complains)
    const dispatch = useDispatch()

    const getAllComplains = async () => {
        await axios.get(`${api}/complain/all`)
            .then(docs => {
                dispatch({ type: "GETALLCOMPLAINS", payload: docs.data })
            })
            .catch(err => console.log(err))
    }

    useEffect(
        () => {
            if (complains.length === 0) {
                getAllComplains()
            }
        }, []
    )

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
            <ViewComplainModal complain={selectedComplain} />
            <div className="main_content">

                <div className="container-fluid">
                    <div className="row">
                        {
                            complains.map((complain, index) => {
                                return <ComplainCard key={index} viewComplain={viewComplain} complain={complain} />
                            })
                        }
                    </div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#newComplainModal" className="btn btn-custom rounded-pill shadow-sm fw-bold fab">New Complain</button>
            </div>
        </>
    )
}

export default Complains
