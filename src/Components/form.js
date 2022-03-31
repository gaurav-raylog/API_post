import axios from "axios";
import React, { Component } from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  function appendData() {
    console.warn(email, fname, lname, phone, dob, password);
    let data = { email, fname, lname, phone, dob, password };
    console.log(data);

    /*AXIOS Method*/
    // 'https://api.ovministries.com/v1/users/signup/'
    // axios.post('https://api.ovministries.com/v1/users/signup/', data)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    // fetch('https://api.ovministries.com/v1/users/signup/', {
    //     method: 'POST',
    //     headers:{
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(data)
    // }).then((response)=>{
    //     console.log(response.body)
    //     alert("SignUp successful")
    // })
    // .catch((error)=>{
    //     console.log(error)
    //     alert("SignUp unsuccessful")
    // })
  }
  return (
    <div className="form">
      <div className="form_components">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(event) => {
            setFname(event.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(event) => {
            setLname(event.target.value);
          }}
        />
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="button" onClick={appendData}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Form;
