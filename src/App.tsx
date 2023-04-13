import React from "react";
import { RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes";

function App() {
  return (
    <Container className="mb-5" fluid>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
