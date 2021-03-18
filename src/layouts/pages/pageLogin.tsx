import React from "react";
export function PageLogin(): JSX.Element {
  interface UserInfo {
    email: string;
    password: string;
  }

  const users = [
    { email: "abc@gmail.com", password: "12345" },
    { email: "rafid@gmail.com", password: "67890" },
  ];

  const handleSubmit = (email: string, password: string) => {
    let matched = false;
    users.map((user) => {
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
