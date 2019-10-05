import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {router_config} from "./configs/route_config";

class App extends React.Component {

    render() {

        return(
        <BrowserRouter>
            <Switch>
                {
                    router_config.map((item) => (
                        item.Master ?
                    <Route path={item.path} exact={item.exact} key={item.path || 'NoPage'}
                           render={(props) => (
                               <item.Master >
                                   <item.Component props></item.Component>
                               </item.Master>
                           )}/>
                           :
                            <Route path={item.path} key={item.path || 'NoPage'} component={item.Component}/>
                ))
                }
            </Switch>
        </BrowserRouter>
        )
    }

}
export default App;