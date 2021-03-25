import React, { useState, useEffect } from "react";
// import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Button from '@material-ui/core/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be empty")
        .email("Invalid email"),
      password: yup
        .string()
        .required("Password cannot be empty")
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Weak Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
      loginClickHandler()
    },
  });

  const loginClickHandler = () => {
    // API CALL IS MADE - RETURNS
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    localStorage.setItem("access-token", jwtToken);
    // props.setIsLoggedIn(true)
    props.history.push("/");
  };



  const onBlur = (name) =>{
      formik.setFieldTouched(name,true)
  }

  const onChangeHandler = (name,value) =>{
      formik.setFieldValue(name,value)
  }

  return (
    <div className="login">
      <div className="form-container">
        <div className="header-band">
          <h3> HRMS </h3>
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="email"
              classes={{
                inputComponentClass: "login-input",
              }}
              value={formik.values.email}
              onChange={(event) => onChangeHandler(event.target.name,event.target.value)}
              type="email"
              placeholder="Enter email"
              onBlur={(event) => onBlur(event.target.name)}
              onFocus={() => console.log("On Focus")}
              errors={formik.errors.email}
            />
            {/* <Input
              name="password"
              classes={{
                inputComponentClass: "login-input",
              }}
              value={formik.values.password}
              onChange={(event) => onChangeHandler(event.target.name,event.target.value) }
              //   type="password"
              placeholder="Enter password"
              onBlur={(event) => onBlur(event.target.name)}
              errors={formik.errors.password}
            /> */}
            <TextField type="password" placeholder="Enter password" onBlur={(event) => onBlur(event.target.name)} id="outlined-basic" name="password" value={formik.values.password} label="password" variant="outlined" onChange={(event) => onChangeHandler(event.target.name,event.target.value) } />
          </div>
          {/* Custom Button 
            <Button type="submit" classname="login-button">
            Login
          </Button>
          */}
          <Button type="submit" variant="contained" color="primary">Sign In</Button>
          <Button variant="outlined" color="secondary">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
