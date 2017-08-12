import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import App from '../Components/App'
import Home from '../Components/Home'
import Dev from '../Components/Dev'

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <div>
                <Route path="/" render={(props) => <App  {...props} />} />
                <Route path="/home" render={(props) => <Home  {...props} />} />
                <Route path="/dev" render={(props) => <Dev  {...props} />} />
            </div>
        </BrowserRouter>
    )
}
