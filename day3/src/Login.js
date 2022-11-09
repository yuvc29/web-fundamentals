import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import App from "./App"

import axios from "axios"


export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false)

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();
    const payload = {email:email, password:password}
    postUser(payload, setSuccess)
  }

  return (

    <div className="Login">
    {
        success?
        <App email = {email}/>:
        <Form onSubmit={handleSubmit}>

            <Form.Group size="lg" controlId="email">

            <Form.Label>Email</Form.Label>

            <Form.Control

                autoFocus

                type="email"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

            />

            </Form.Group>

            <Form.Group size="lg" controlId="password">

            <Form.Label>Password</Form.Label>

            <Form.Control

                type="password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

            />

            </Form.Group>

            <button onClick={handleSubmit} disable = {!validateForm}>

            Login

            </button>

        </Form>
    }
    </div>

  );

}

function postUser(payload, setSuccess){
  // let response;
    // fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded"
    //     },
    //     body: payload
    // })
    let response = axios.post(`/login?username=${payload.email}&password=${payload.password}`)
    .then((response) => {
        console.log(response)
        setSuccess(true)
    });
    // setSuccess(true)
}

// const loginOnFinish = (loginCredentials) => {
//   const bodyContent = "username=" + loginCredentials.email + "&password=" + loginCredentials.password
//   fetch("http://localhost:8080/login", {
//       body: bodyContent,
//       method: "POST",
//       credentials: 'include',
//       headers: {
//           "content-type": "application/x-www-form-urlencoded"
//           }
//   }).then((response) => {
//       let endpoint = '/users/' + loginCredentials.email;
//       console.log(endpoint);
//       navigate(endpoint);
//   })
