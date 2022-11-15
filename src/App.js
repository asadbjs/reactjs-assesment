import React, { useState } from "react";
import { getUsers, createUser, createUserWithId, removeUser } from "./ApiService";
import "./styles.css";

const CreateUserForm = ({ create }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={(createUserEvent) => {
        createUserEvent.preventDefault();

        // implementation required.
        create(createUserEvent)

        resetForm();
      }}
    >
      <input
        className="input-text"
        name="firstName"
        placeholder="First"
        value={firstName}
        required
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className="input-text"
        name="lastName"
        placeholder="Last"
        value={lastName}
        required
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        className="input-text"
        name="email"
        placeholder="Email"
        type="email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <input className="button" type="submit" value="Add User" />
    </form>
  );
};

const ListUsers = ({ users, remove }) => (
  <div>
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-detail" key={user.userId}>
          <span className="display-text">{user.firstName}</span>
          <span className="display-text">{user.lastName}</span>
          <span className="display-text">{user.email}</span>
          <button onClick={() => remove(user)}>X</button>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = ({ undo, redo }) => (
  <div className="footer">
    <button onClick={undo}>Undo</button>
    <button onClick={redo}>Redo</button>
  </div>
);

export default function App() {
  // states
  const [users, setUsers] = useState([]);


  // handlers
  const create = () => {
    // implementation required.
  };
  const remove = () => {
    // implementation required.
  };
  const undo = () => {
    // implementation required.
  };
  const redo = () => {
    // implementation required.
  };

  return (
    <div className="App">
      <h1>Create User</h1>
      <CreateUserForm create={create} />
      <ListUsers users={users} remove={remove} />
      <Footer undo={undo} redo={redo} />
    </div>
  );
}
