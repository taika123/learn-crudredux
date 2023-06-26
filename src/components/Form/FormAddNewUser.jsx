import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createNewUsers } from "../../redux/action/action";

function FormAddNewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const isDisable = useSelector((state) => state.userReducer.isDisable);
  const dispatch = useDispatch();

  const handleCreateUsers = () => {
    dispatch(createNewUsers(email, password, username));
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Email@example.com"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password@example.com"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username@example.com"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => handleCreateUsers()} disabled={isDisable}>
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default FormAddNewUser;
