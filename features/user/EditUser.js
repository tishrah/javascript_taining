import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userReducer";

const AddUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const existingUser = user.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [value, setValue] = useState({
    name,
    email,
  });
  const handleEditUser = () => {
    setValue({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
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
        inputProps={{ type: "text", placeholder: "hello" }}
      />
      <br />
      <TextField
        label="EMAIL"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "hello@email.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default AddUser;
