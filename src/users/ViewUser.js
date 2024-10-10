import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mt-5" >
        
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-dark text-light "style={{ border: '2px solid white' }} >
          <h2 className="text-center mb-4" >User Details</h2>

          <div className="card bg-dark text-light" style={{ border: '2px solid white' }}>
            <div className="card-header" style={{ border: '1px solid white' }}>
              <b>User ID:</b> {id}
            </div>
            <div className="card-body" style={{ border: '1px solid white' }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-light">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item bg-dark text-light">
                  <b>Username:</b> {user.username}
                </li>
                <li className="list-group-item bg-dark text-light">
                  <b>Email:</b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
