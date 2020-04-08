import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { objUserInfo } from "../constants/creaters";
import { UserInfo } from "../types/User";
// import Img from "../img/error.png";

interface RegisterProps {
  addUserInfo: (info: UserInfo) => void;
}

const Register: React.FunctionComponent<RegisterProps> = ({ addUserInfo }) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password1":
        setPassword1(event.target.value);
        break;
      case "password2":
        setPassword2(event.target.value);
        break;
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    addUserInfo(
      objUserInfo(0, username, firstName, lastName, email, password1, phone, 0)
    );
    event.preventDefault();
    history.push("/login");
  };

  const validating = () => {
    let arr = [
      username,
      firstName,
      lastName,
      email,
      password1,
      password2,
      phone,
    ];
    let valid = 0;
    for (let i = 0; i < 7; i++) {
      arr[i].trim() ? (valid += 1) : "";
    }
    valid === 7 ? setValid(true) : setValid(false);
  };

  const passwordValidating = () => {
    password1.trim() && password2.trim() && password1 !== password2
      ? setPasswordValid(false)
      : setPasswordValid(true);
  };

  const passwordKeyUp = () => {
    validating();
    passwordValidating();
  };
  return (
    <div className="forma">
      <form className="forma" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={username}
        ></input>
        <div className={passwordValid ? "validPassword" : "invalidPassword"}>
          <div className="passwordForm">
            <input
              id="p1"
              type="password"
              placeholder="Пароль"
              name="password1"
              onChange={handleChange}
              value={password1}
              onKeyUp={passwordKeyUp}
            ></input>
            <input
              id="p2"
              type="password"
              placeholder="Повторите пароль"
              name="password2"
              onChange={handleChange}
              value={password2}
              onKeyUp={passwordKeyUp}
            ></input>
          </div>
          <img src="../../public/imgs/error.png" />
          <h3>Пароли не совпадают</h3>
        </div>
        <input
          type="text"
          placeholder="Имя"
          name="firstName"
          onChange={handleChange}
          value={firstName}
          onKeyUp={validating}
        ></input>
        <input
          type="text"
          placeholder="Фамилия"
          name="lastName"
          onChange={handleChange}
          value={lastName}
          onKeyUp={validating}
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          onKeyUp={validating}
        ></input>
        <input
          type="text"
          placeholder="Телефон"
          name="phone"
          onChange={handleChange}
          value={phone}
          onKeyUp={validating}
        ></input>
        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "validButton" : ""}
        >
          Регистрация
        </button>
      </form>
      <Link to="/login">Войти</Link>
    </div>
  );
};

export default Register;
