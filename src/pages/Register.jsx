import React from "react";
import { useState } from "react";
import { validateEmail } from "../validation/email/util";
function Register() {
  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    department: "",
    role: "",
    salary: "",
    email: "",
    password: "",
  });
  const handleChanges = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((Form) => ({ ...Form, [name]: value }));
    console.log(Form);
  };
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      companyName: "",
      department: "",
      role: "",
      salary: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First Name <sup>*</sup>
            </label>
            <input
              required
              value={Form.firstName}
              onChange={handleChanges}
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="Field">
            <label>
              Last Name <sup>*</sup>
            </label>
            <input
              value={Form.lastName}
              onChange={handleChanges}
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Company Name <sup>*</sup>
            </label>
            <input
              required
              value={Form.companyName}
              onChange={handleChanges}
              name="companyName"
              placeholder="Comapany name"
            />
          </div>
          {/* <div className="Field"> 
              <label>Last name</label> 
              <input 
                value={lastName} 
                onChange={(e) => { 
                  setLastName(e.target.value); 
                }} 
                placeholder="Last name" 
              /> 
              </div>  */}
          <div className="Field">
            <label>
              Department <sup>*</sup>
            </label>
            <select
              required
              value={Form.department}
              name="department"
              onChange={handleChanges}
            >
              <option value="">select </option>
              <option value="Development">Development</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={Form.role} name="role" onChange={handleChanges}>
              <option value="">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              required
              type="email"
              name="email"
              value={Form.email}
              onChange={handleChanges}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              required
              name="password"
              value={Form.password}
              type="password"
              onChange={handleChanges}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {Form.password.isTouched && Form.password.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <button type="submit">Create account</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
