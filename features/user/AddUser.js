import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userReducer";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });
  const handleAddUser = () => {
    setValue({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: value.name,
        email: value.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="NAME"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "sample" }}
      />
      <br />
      <TextField
        label="EMAIL"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "sample@email.com" }}
      />
      <Button onClick={handleAddUser}>ADD</Button>
    </div>
  );
};

export default AddUser;
