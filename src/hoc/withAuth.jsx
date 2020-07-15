import React from "react"
import { connect } from "react-redux"
import {Redirect} from "react-router-dom"

const mapStateToProps = (state) => {
    return {
        auth:state.stateReducer.auth
    }
}

export const withAuth = (Component) => {
    const ComponentContainer = (props) => {
        if(!props.auth){
            return <Redirect to="/signin" />
                        
        }
        return <Component {...props} />
    }
    const ContainerForComponentContainer = connect(mapStateToProps)(ComponentContainer)
    return ContainerForComponentContainer
}