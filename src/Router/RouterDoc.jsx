import React, { Fragment } from 'react'
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom'
import { Home } from '../Componentes/Home/Home'
import { ContainerHtml } from '../Componentes/Html/ContainerHtml/ContainerHtml'

export const RouterDoc = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route 
                        exact
                        path='/'
                        component={ Home }
                    />
                    <Route
                        exact
                        path='/htmlDoc'
                        component={ ContainerHtml }/>
                    
                </Switch>
            </Fragment>
        </Router>
    )
}
