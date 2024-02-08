import mysql from "mysql2/promise"
const connectionParams = {
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
}

interface User {
    id: number
    name: string
}

async function getData() {
    const connection = await mysql.createConnection(connectionParams)
    const querry = "SELECT * FROM users;"
    const [results] = await connection.execute(querry, [])
    return results
}

export default getData
