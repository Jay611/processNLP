import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"

const ParametersForm = (props) => {
  const [state, setState] = useState({
    summarizeURL: "",
    numSentences: 3,
  });

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    props.history.push({
      pathname: "/results",
      state,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>What do you want to summarize?</h1>
      <Form className="register-form" onSubmit={handleOnSubmit}>
      <Form.Group controlId="summarizeURL">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            step="any"
            placeholder="Enter URL"
            name="summarizeURL"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="numSentences">
          <Form.Label>Number Sentences</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Number of Sentences "
            name="numSentences"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Summarize
        </Button>
      </Form>
    </div>
  );
};
export default ParametersForm;
