import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {
    const [users, setUsers] = useState([])
    const [searchitem, setSearchitem] = useState("")
    console.log(searchitem)

    useEffect(() => {
        loder()
    }, [])

    const loder = async () => {
        const Data = await axios.get('http://localhost:3003/users')
        setUsers(Data.data)

    }
    const Delete = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loder();
    }

    return (
        <div>
            <h1>Home pAge</h1>
            <div className="container border shadow p-1 w-4">
                <div>
                    <input type="text" value={searchitem} onChange={(e) => setSearchitem(e.target.value)} />

                </div>
            </div>
            <div className="container border shadow p-2">
                <Link to="/adduser" className="btn btn-primary" >Add</Link>
            </div>

            <div class="table-responsive m-5">
                <table className="table border shadow table align-middle">
                    <thead className="bg-dark text-light">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {
                        users.filter((value) => {
                            if (value.name === "") {
                                return true
                            }
                            else if (value.name?.toLowerCase().includes(searchitem?.toLowerCase()) || value.email?.toLowerCase().includes(searchitem?.toLowerCase())) {
                                return true
                            }
                        }).map((user, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                        <Link to={`/viewuser/${user.id}`} className="btn btn-primary bg-primary m-2">View</Link>
                                        <Link className="btn btn-warning bg-warning text-dark m-2" to={`/updateuser/${user.id}`}>Update</Link>
                                        <button className="btn btn-success bg-danger text-dark m-2" onClick={() => { Delete(user.id) }} >Delete</button>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Home
