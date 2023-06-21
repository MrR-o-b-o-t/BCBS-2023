import React, { useEffect, useState } from "react";
import "./home.css";

import Pagination from "../../components/Pagination/customPagination.tsx";
import AddUsers from "../../components/Users/AddUser.tsx";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default function Home(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(5);

  const indexOfLastUser: number = currentPage * usersPerPage;
  const indexOfFirstUser: number = indexOfLastUser - usersPerPage;
  const currentUsers: User[] = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch("https://reqres.in/api/users");
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const deleteUser = async (id: number): Promise<void> => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user: User) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="">
      <div>
        <h2>Add New User</h2>
        <AddUsers />
      </div>
      <div className="mt-3">
        <Row xs={1} md={2} className="g-4">
          {currentUsers.map((user: User) => (
            <Col key={user.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={user.avatar}
                  alt={user.first_name}
                  id="user__images"
                />
                <Card.Body>
                  <Card.Title>
                    {user.first_name} {user.last_name}
                  </Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-3">
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
}
