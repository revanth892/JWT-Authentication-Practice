import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
function Menu(props) {
    return (
        <div>
            {props.isLoggedIn ? null : <div><NavLink to="/">Login</NavLink></div>}

            {props.isLoggedIn ? <div><NavLink to="/accounts">Accounts</NavLink></div> : null}
            
            {props.isLoggedIn ? <div><NavLink to="/profile">Profile</NavLink></div> : null}
            
        </div>
    )
}

const mapStateToProps =(State)=>
    {
        return{
            isLoggedIn: State.isLoggedIn
        }
    }
export default connect(mapStateToProps)(Menu);