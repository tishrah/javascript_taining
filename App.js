import React from "react";
import UserList from "./features/user/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./features/user/AddUser";
import EditUser from "./features/user/EditUser";

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD with redux
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
