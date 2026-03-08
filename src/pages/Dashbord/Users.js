import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [])

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        <Link to ={`${user.id}`} state={{user}}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users