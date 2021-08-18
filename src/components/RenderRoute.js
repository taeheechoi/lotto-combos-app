import React from 'react'
import { Route } from 'react-router-dom'

const RenderRoute = (route) => {

    const {path, component, title} = route
    document.tile = title || 'Lotto Combo Search'

    return (
        <div>
            <Route path={path} exact component={component}/>
        </div>
    )
}

export default RenderRoute
