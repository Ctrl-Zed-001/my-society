import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Complains from './Complains/Complains'
import Dashboard from './Dashboard/Dashboard'
import Meetings from './Meetings/Meetings'
import Notices from './Notices/Notices'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Dashboard /></Route>
                <Route exact path="/complains"><Complains /></Route>
                <Route exact path="/meetings"><Meetings /></Route>
                <Route exact path="/notices"><Notices /></Route>
            </Switch>
        </Router>
    )
}

export default App