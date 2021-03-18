import React from "react";
export function PageLogin(): JSX.Element {
  const user = [
    { email: "abc@gmail.com", password: "12345" },
    { email: "rafid@gmail.com", password: "67890" },
  ];

  const [email, setEmail] = React.useState([]);
  const [pass, setPass] = React.useState([]);

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
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary block full-width m-b"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
