import React from "react";
import { useState } from "react";

export default function Form(props) {
    const [newAdd, setNewAdd] = useState
        ({
            name: "",
            email: "",
            role: ""


        })
    const handleChange = e => {
        setNewAdd({ ...newAdd, [e.target.name]: e.target.value })

        console.log(newAdd)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.memberData(newAdd)

        setNewAdd({ name: "", email: "", role: "" })

    }



    return (
        <div>
            ,<h1>Team Builder Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="listOfMember">
                    Name:
                    <input id="listOfmember" type="text" name="name" value={newAdd.name} placeholder="Enter Full Name:" onChange={handleChange} />
                </label>

                {/* </form>
            <form onSubmitChange={handleSubmit}> */}
                <label htmlFor="yurEmail">
                    Email:
                    <input id="yurEmail" type="text" name="email" value={newAdd.email} placeholder="Enter E-mail:" onChange={handleChange} />
                </label>
                {/* </form> */}
                {/* <form onSubmitChange={handleSubmit}> */}
                <label htmlFor="yurRole">
                    Role:
                    <input id="yurRole" type="text" name="role" value={newAdd.role} placeholder="Enter Role:" onChange={handleChange} />
                    <button type="submit" >Click Here</button>
                </label>
            </form>
        </div>


    );


}