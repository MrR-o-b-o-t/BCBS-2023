import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios, { AxiosResponse } from "axios";

interface AddUsersProps {
  
}

interface User {
  name: string;
  job: string;
}

const AddUsers: React.FC<AddUsersProps> = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<User> = await axios.post("/addUser", {
        name,
        job,
      });

      const newUser: User = response.data;

      console.log("New User:", newUser);

      setName("");
      setJob("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleJobChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="jobTitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Job Title"
          value={job}
          onChange={handleJobChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUsers;
