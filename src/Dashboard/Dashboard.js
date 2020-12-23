import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import DashCard from './DashCard'

const Dashboard = () => {
    return (
        <>
            <NavbarHome />
            <div className="main_content">
                <div className="container-fluid">
                    <div className="row">
                        <DashCard link="/complains" icon="bad-review.svg" name="Complains" />
                        <DashCard link="/meetings" icon="meeting.svg" name="Meetings" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
