import React from "react";
import { Route, useNavigate } from "react-router-dom";


function ProtectedRoute({/*isAuth:*/isAuth, component: Component, ...rest}){
    let navigate = useNavigate()
    return(
        <Route
        {...rest}
        render={(props) => {
        if (isAuth) {
            return <Component/>;
        } else {  
            return (
                navigate ("/", { from: props.location} )
            )
        }
        }
        } />
    )    
    

}

export default ProtectedRoute;