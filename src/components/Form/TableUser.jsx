import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./TableUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, fetchAllDataUsers } from "../../redux/action/action";

function TableUser(props) {
  const dispatch = useDispatch();

  const listUsers = useSelector((state) => state.userReducer.listUsers);
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const isError = useSelector((state) => state.userReducer.isError);

  const handleDeleteUser = (user) => {
    console.log("user", user);
    dispatch(deleteUserById(user.id));
    // console.log("edit", id);
  };

  const handleCreateUser = () => {};

  useEffect(() => {
    dispatch(fetchAllDataUsers());
  }, []);

  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isError === true ? (
              <>
                <div>Something wrongs, please try again?</div>
              </>
            ) : (
              <>
                {isLoading === true ? (
                  <>
                    <div>Loading</div>
                  </>
                ) : (
                  <>
                    {listUsers &&
                      listUsers.length > 0 &&
                      listUsers.map((user, i) => {
                        return (
                          <tr key={`user-${i}`}>
                            <td>{i + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                              <button
                                className="btn btn-action"
                                onClick={() => handleDeleteUser(user)}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-action"
                                onClick={() => handleCreateUser(user)}
                              >
                                Add
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableUser;
