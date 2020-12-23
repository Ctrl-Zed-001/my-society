import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import NavbarPage from "../Components/NavbarPage"
import NewMeetingModal from './NewMeetingModal'
import { api } from "../Address"
import MeetingCard from './MeetingCard'
import { useSelector, useDispatch } from 'react-redux'
import RescheduleMeetingModal from './RescheduleMeetingModal'


const Meetings = () => {

    const [selectedMeeting, setSelectedMeeting] = useState({})
    const meets = useSelector(state => state.meetings)
    const dispatch = useDispatch()

    const getMeetings = async () => {
        await Axios.get(`${api}/meeting/all`)
            .then(docs => {
                dispatch({ type: "GETALLMEETINGS", payload: docs.data })
            })
            .catch(err => console.log(err))
    }

    useEffect(
        () => {
            if (meets.length === 0) {
                console.log("getting")
                getMeetings()
            }
        }, []
    )

    const newMeeting = (newData) => {
        const timing = Date.parse(`${newData.date} ${newData.time}`)
        Axios.post(`${api}/meeting/new`, { subject: newData.subject, date_time: new Date(timing) })
            .then(res => {
                dispatch({ type: "NEWMEETING", payload: res.data })
            })
            .catch(err => console.log(err))
    }

    const selectMeeting = (meet) => {
        setSelectedMeeting(meet)
    }

    const newSchedule = (scheduledata) => {
        const newtiming = Date.parse(`${scheduledata.date} ${scheduledata.time}`)
        Axios.post(`${api}/meeting/update`, { id: selectedMeeting._id, newtiming })
            .then(newDoc => {
                dispatch({ type: "RESCHEDULE", payload: newDoc.data })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <NavbarPage page="meetings" />
            <NewMeetingModal newMeeting={newMeeting} />
            <RescheduleMeetingModal newSchedule={newSchedule} />
            <div className="main_content">

                <div className="container-fluid">
                    <div className="row">
                        {
                            meets && meets.map((meet, index) => {
                                return (
                                    <MeetingCard key={index} meet={meet} selectMeeting={selectMeeting} />
                                )
                            })
                        }
                    </div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#newMeetingModal" className="btn btn-custom rounded-pill shadow-sm fw-bold fab">New Meeting</button>
            </div>
        </>
    )
}

export default Meetings
