import React, { useState } from 'react'

const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button className="btn btn-outline-success" type="button" onClick={props.create}>Create button</button>
                </form>
            </nav>
            
        </>
    )
}

export default Navbar;
