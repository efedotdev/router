import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './styles.css';

function AuthLayout() {
    return (
        <div className='auth-container'>
            <div className='auth-menu'>
                <Link to="/auth">Auth</Link>
                <Link to="/auth/register">Register</Link>
                <hr />
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout