import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../session/withAuthentication";
import * as ROUTES from "../../constants/routes"

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routerProps =>
                !!currentUser ? (
                    <RouteComponent {...routerProps} />
                ) : (
                    <Redirect to={ROUTES.SIGN_IN} />
                )
            }
        />
    )
}

export default PrivateRoute;