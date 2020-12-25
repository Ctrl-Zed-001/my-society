import React, { useState, useEffect } from 'react'
import NavbarPage from "../Components/NavbarPage"
import NewNoticeModal from './NewNoticeModal'
import ViewNoticeModal from './ViewNoticeModal'
import NoticeCard from "./NoticeCard"
import Axios from "axios"
import { api } from "../Address"
import { useSelector, useDispatch } from "react-redux"

const Notices = () => {
    const notices = useSelector(state => state.notices)
    const dispatch = useDispatch()

    const [selctedNotice, setSelectedNotice] = useState({})


    const getAllNotices = async () => {
        await Axios.get(`${api}/notice/all`)
            .then(res => {
                dispatch({ type: "ALLNOTICES", payload: res.data })
            })
            .catch(err => console.log(err))
    }

    useEffect(
        () => {
            getAllNotices()
        }, []
    )

    const viewNotice = (notice) => {
        setSelectedNotice(notice)
    }

    const addNotice = (newData) => {
        Axios.post(`${api}/notice/add`, { ...newData })
            .then(res => {
                dispatch({ type: "NEWNOTICE", payload: res.data })
            })
            .catch(err => console.log(err))
    }

    const deleteNotice = (id, index) => {
        Axios.post(`${api}/notice/delete`, { id: id })
            .then(res => {
                dispatch({ type: "DELETENOTICE", payload: index })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavbarPage page="notices" />
            <NewNoticeModal addNotice={addNotice} />
            <ViewNoticeModal selctedNotice={selctedNotice} />
            <div className="main_content">

                <div className="container-fluid">
                    <div className="row">
                        {
                            notices.map((notice, index) => {
                                return (
                                    <NoticeCard key={index} notice={notice} index={index} viewNotice={viewNotice} deleteNotice={deleteNotice} />
                                )
                            })
                        }
                    </div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#newNoticeModal" className="btn btn-custom rounded-pill shadow-sm fw-bold fab">New Notice</button>
            </div>
        </>
    )
}

export default Notices
