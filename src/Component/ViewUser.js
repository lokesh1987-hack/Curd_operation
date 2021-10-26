import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ViewUser() {

    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        loader();
    })
    const loader = async () => {
        let result = []
        result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
        console.log(result.data)
    }

    return (
        <div>
            <h1>View User</h1>

            <div className="container border w-10">
                {user.map((item) => {
                    return (
                        <div>
                            <ul key={item.id}>
                                <li>Name :{item.name}</li>
                                <li>Username :{item.username}</li>
                                <li>Email :{item.email} </li>
                                <li>Phone :{item.phone} </li>
                                <li>Adress :{item.adress} </li>
                                <li>Website :{item.website} </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewUser
