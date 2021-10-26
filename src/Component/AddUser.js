import axios from 'axios';
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'

function AddUser() {

    let history = useHistory()

    const [user,setUser ] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        adress:"",
        website:""        
    })
    const {name, username, email, phone, adress, website}= user;
    const OnChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const submit =async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3003/users",user)
        history.push('/')
    }

    return (
        <div>
            <h1>Add User</h1>
            <div className="container border shadow p-5 w-50">
            <form onSubmit={e=>submit(e)}>
                <div className="mb-3">
                    <label for="Name" className="form-label">Name </label>
                    <input name="name" value={name} type="name" onChange={e=>OnChange(e)} className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                    <label for="Username" className="form-label">Username </label>
                    <input name="username" value={username} onChange={e=>OnChange(e)} type="username" className="form-control" id="Name" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" value={email} onChange={e=>OnChange(e)} className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone No. </label>
                    <input type="pnone" name="phone" value={phone} onChange={e=>OnChange(e)} className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                    <label for="Adress" className="form-label">Adress </label>
                    <input type="adress" name="adress" value={adress} onChange={e=>OnChange(e)} className="form-control" id="Adress" />
                </div>
                <div className="mb-3">
                    <label for="Website" className="form-label">Website</label>
                    <input type="website" name="website" value={website} onChange={e=>OnChange(e)} className="form-control" id="Website" />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddUser
