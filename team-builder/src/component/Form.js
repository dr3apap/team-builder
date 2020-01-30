import React from "react";
import { useState } from "react";

export default function Form(props) {
    const [list, setList] = useState
        ({
            name: "",
            email: "",
            role: ""


        })
    const handleChange = e => {
        setList({ ...list, [e.target.name]: e.target.value })

        console.log(list)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.memberData(list)
        // console.log(list.name, list.email, list.role);

    }



    return (
        <div>
            ,<h1>Team Builder Form</h1>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="listOfMember">
                    Name:
                    <input id="listOfmember" type="text" name="name" value={list.name} placeholder="Enter Full Name:" />
                </label>

                {/* </form>
            <form onSubmitChange={props.handleSubmit}> */}
                <label htmlFor="yurEmail">
                    Email:
                    <input id="yurEmail" type="text" name="email" value={list.email} placeholder="Enter E-mail:" />
                </label>
                {/* </form> */}
                {/* <form onSubmitChange={props.handleSubmit}> */}
                <label htmlFor="yurRole">
                    Role:
                    <input id="yurRole" type="text" name="role" value={list.role} placeholder="Enter Role:" />
                    <button onSubmit={props.handleSubmit}>Click Here</button>
                </label>
            </form>
        </div>


    );


}