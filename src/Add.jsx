import React, { useState } from 'react'

const Add = (props) => {

    const [email,setEmail] = useState("");
    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");
    const id = Math.floor(Math.random() * 100);

    const submit = (e) => {
        e.preventDefault();
        const val = {
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            email: `${email}`,
            first_name: `${first}`,
            id: `${id}`,
            last_name: `${last}`
        }
        props.post(val);
        setEmail("");
        setFirst("");
        setLast("");
    }

    return (
        <>
            <div className="add" style={{top:props.top}}>
                <h1> create an account </h1>
                <form onSubmit={submit}>
                    <div class="form-group">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <input type="name" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <input type="name" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </>
    )
}

export default Add;
