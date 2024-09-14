import React from "react";
import { useState } from "react";

import { validateEmail } from "../validation/email/util";
import { Link } from "react-router-dom";
function Login() {
  const [Form, setForm] = useState({
    user_id: "",
    company_name: "",
    password: "",
  });
  const handleChanges = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((Form) => ({ ...Form, [name]: value }));
    console.log(Form);
  };

  const clearForm = () => {
    setForm({
      user_id: "",
      company_name: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <form
        className="w-50 h-full flex flex-col justify-center items-center bg-red-300"
        onSubmit={handleSubmit}
      >
        <fieldset className="w-full  h-1/2 flex flex-col justify-center items-left  bg-zinc-300">
          <h2 className="underline font-medium text-4xl text-light flex justify-center items-center">Log In</h2>

          <div className="w-46 mx-[2em] gap-x-4 mt-4 flex justify-between">
            <label className="">User ID</label>
            <input
              required
              type="text"
              name="user_id"
              value={Form.user_id}
              onChange={handleChanges}
              placeholder="User ID .."
            />
          </div>
          <div className="w-46 mx-[2em] gap-x-4 mt-4 flex justify-between">
            <label className="">Company Name</label>
            <input
              required
              type="text"
              name="company_name"
              value={Form.company_name}
              onChange={handleChanges}
              placeholder="Company Name .."
            />
          </div>
          <div className="w-46 mx-[2em] mt-4 flex justify-between">
            <label>Password</label>
            <input
              className=" "
              required
              name="password"
              value={Form.password}
              type="password"
              onChange={handleChanges}
              placeholder="Password"
            />
          </div>
          <Link className="text-blue-500 mx-[2em] mt-[1em]" to="/Register">
            forgot password or  user id click here..
          </Link>
          <button
            className="bg-green-300 rounded-xl h-[2em] m-[2em]"
            type="submit"
          >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
