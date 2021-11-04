import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Teste from './pages/Teste'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/search" component={Search} />
                <Route path="/teste" component={Teste} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes