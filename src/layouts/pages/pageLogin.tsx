import React, { useEffect, useState } from "react";
import Axios from "axios";

export function PageLogin(): JSX.Element {
  interface UserInfo {
    email: string;
    password: string;
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://localhost:44319/api/UserInfo/authenticate";

    Axios.post(url, {}).then(
      (userData) => {
        // setUsers(userData);
        console.log(userData);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }, []);

  const handleSubmit = (email: string, password: string) => {
    let matched = false;
    users.map((user: any) => {
      console.log(user);
      if (user.email === email && user.password === password) {
        matched = true;
      }
    });
    return matched;
  };

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <body className="gray-bg">
      <div className="middle-box text-center loginscreen animated fadeInDown jumbotron m-5">
        <div>
          <div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
              onClick={() => {
                console.log(handleSubmit(email, pass));
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
