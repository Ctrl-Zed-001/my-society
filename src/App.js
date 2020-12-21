import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Complains from './Complains/Complains'
import Dashboard from './Dashboard/Dashboard'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Dashboard /></Route>
                <Route exact path="/complains"><Complains /></Route>
            </Switch>
        </Router>
    )
}

export default App