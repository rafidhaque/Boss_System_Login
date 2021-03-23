import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { AppRouteUi } from "../../configs/appRoute";

export function PageLogin(): JSX.Element {
  interface UserInfo {
    email: string;
    password: string;
  }

  const handleSubmit = (email: string, password: string) => {
    const url = "https://localhost:44319/api/UserInfo/authenticate";

    Axios.post(url, {
      UserName: email,
      Password: password,
    }).then(
      (userData) => {
        console.log(userData.data.token);
      },
      (error) => {
        console.log("User Not Found");
      }
    );
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
            {/* <Link to={AppRouteUi.Home.Root()}> */}
            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
              onClick={() => {
                handleSubmit(email, pass);
              }}
            >
              Login
            </button>
            {/* </Link> */};
          </div>
        </div>
      </div>
    </body>
  );
}
