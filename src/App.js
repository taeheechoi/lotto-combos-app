import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import RenderRoute from './components/RenderRoute'
import routes from './components/routes'
import { Provider } from './contexts/Provider'
import './App.css'

const App = () => {
    return (
        <div className="flex-container">
          <Provider>

          <BrowserRouter>
            <Switch>
              {routes.map(route => <RenderRoute {...route} key={route.title}/>)}
              <Redirect from="/" to="/winning-numbers" />
            </Switch>
          </BrowserRouter>
          </Provider>
          
            
        </div>
    )
}





export default App