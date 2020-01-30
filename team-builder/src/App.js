import React from 'react';
import './App.css';
import { useState } from "react"
import Form from "./component/Form"
import List from "./component/List"

function App() {
  const [member, setMember] = useState
    ([{
      name: "Adesina Adebola",
      email: "dr3apap@gmail.com",
      role: "Lambda Student "
    }])
  const memberData = (newAdd) => {
    const newMember =
    {
      name: newAdd.name,
      email: newAdd.email,
      role: newAdd.role
    }

    setMember([...member, newMember])
  }


  return (
    <div className="App">
      <Form memberData={memberData} />
      <List member={member} />
    </div>
  );
}

export default App;
