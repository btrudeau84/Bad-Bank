import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "./context";

function BasicExample() {
  const ctx = useContext(UserContext);
  const [but, setBut] = useState(false);
  const [butName, setButName] = useState("Create Account");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    ctx.users.push(formValues);
    console.log(JSON.stringify(ctx.users));
    setButName("Add Another Account");
  }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Header>Featured</Card.Header>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Gubment Name"
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
                <Form.Text className="text-muted">Who...Are...You?</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  We'll never "share" (Like facebook) your name with anyone
                  else. That's stupid... We'll just SELL IT!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={but}>
                {butName}
              </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
