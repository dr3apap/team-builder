import React from "react";


export default function List(props) {

    return (
        <div>
            {props.member.map(info => (
                <div key={info.email}>
                    <h2>{info.name}</h2>
                    <h3>{info.email}</h3>
                    <h3>{info.role}</h3>


                </div>
            ))}
        </div>

    );



}