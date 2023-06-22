// AddUser.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios, { AxiosResponse } from "axios";

interface AddUsersProps {
  addUserCallback: (newUser: User) => void;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const AddUsers: React.FC<AddUsersProps> = ({ addUserCallback }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      const response: AxiosResponse<User> = await axios.post(
        "https://reqres.in/api/users",
        user
      );
      const newUser: User = response.data;
      addUserCallback(newUser); // Notify Home component to add the user
      setUser({
        id: 0,
        first_name: "",
        last_name: "",
        avatar: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
};

export default AddUsers;
