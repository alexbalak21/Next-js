import React from "react"
import getData from "../sql/db"
import {RowDataPacket} from "mysql2"

interface User {
    id: number
    name: string
}

async function users() {
    const users: RowDataPacket[] = await getData()
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default users
