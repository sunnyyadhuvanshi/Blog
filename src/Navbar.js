import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./App.css";
import { useNavigate } from "react-router-dom";
// import { Home } from "./pages/Home";
// import {Link } from "react-router-dom";

function MyNav() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("about/");
  };

  return (
    <Navbar expand="lg" bg="white" variant="white">
      <Container className="fluid">
        <Navbar.Brand>Blogger</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Registration/">Registration</Nav.Link>
          <Nav.Link href="Login/">Login</Nav.Link>
          <Nav.Link onClick={onAboutClick}>About</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MyNav;

