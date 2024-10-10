import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container mt-5">
      <div className="py-4">

        <table className="table table-hover table-bordered shadow-sm bg-dark text-light">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="bg-dark text-light">S.N</th>
              <th scope="col" className="bg-dark text-light">Name</th>
              <th scope="col" className="bg-dark text-light">Username</th>
              <th scope="col" className="bg-dark text-light">Email</th>
              <th scope="col" className="bg-dark text-light">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-sm btn-primary mx-1" to={`/viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-sm btn-warning mx-1" to={`/edituser/${user.id}`}>
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
