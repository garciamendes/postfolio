// Third party
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Project
import { Home } from './containers/home'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/:categories/' exact component={Home} /> */}
        {/* <Route path='/:name_project/' exact component={Home} /> */}
      </Switch>
    </BrowserRouter>
  )
}