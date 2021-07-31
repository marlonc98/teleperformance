import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CheckNit from '../components/CheckNit';

export const routes = {
    checkNit: {
        path: "/",
        path_with_params: "/",
        authorized_user: [null],
        component: <CheckNit />,
    },
    companyDetail: {
        path: "/company-detail",
        path_with_params: "/company-detail",
        authorized_user: [null],
        component: <companyDetail />,
    }
};

function Routes({ typeUser }) {
    return <Switch>
        {Object.entries(routes).filter(([key, route]) => route.authorized_user.includes(typeUser)).map(([key, route], index) => <Route exact path={route.path_with_params} key={index}>
            {route.component}
        </Route>)}
        <Route>
            <div>Error 404 </div>
        </Route>
    </Switch>
}

export default Routes;
