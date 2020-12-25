import React, { useState } from 'react';
import Update from './Update';

const Card = (props) => {
    const {value} = props;
    
    const [display,setDisplay] = useState("none")
    const del = () => {
        props.delete(value);
    } 

    const update = (val) => {
        props.update(val);
        setDisplay("none");
    } 

    const set = () => {
        setDisplay("block");
    }

    return (
        <>
            <div className="card">
                <div className="avatar">
                    <img src={value.avatar} alt="user image"/>
                </div>
                <div className="info">
                    <h2>Email : {value.email} </h2>
                    <h4>Name : {value.first_name}  {value.last_name} </h4>
                    <button class="btn btn-outline-danger mr-3" type="button" onClick={del}>Delete button</button>
                    <button class="btn btn-outline-primary" type="button" onClick={set}>Update button</button>
                </div>
                <Update display={display} update={update} id={value.id} src={value.avatar} />
            </div>
        </>
    )
}

export default Card;
