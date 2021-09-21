import { Switch, Route } from 'react-router-dom'
import { Detail } from '../pages/Detail'

import { Home } from '../pages/Home'

export function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:user" component={Detail} />
        </Switch>
    )
}