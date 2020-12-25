import React,{useState} from 'react'

const Update = (props) => {

    const [email,setEmail] = useState("");
    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");

    const update = () => {
        const val = {
            avatar: `${props.src}`,
            email: `${email}`,
            first_name: `${first}`,
            id: `${props.id}`,
            last_name: `${last}`
        }
        props.update(val);
        setEmail("");
        setFirst("");
        setLast("");
    }

    return (
        <>
            <div className="update" style={{display: props.display}}>
                <form>
                    <div className="form-group">
                        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input placeholder="first name" value={first} onChange={(e) => setFirst(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input placeholder="last name" value={last} onChange={(e) => setLast(e.target.value)} />
                    </div>
                    <button class="btn btn-outline-primary" type="button" onClick={update}>Update button</button>
                </form>
            </div>
        </>
    )
}

export default Update
