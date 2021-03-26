import React, { useState, useEffect } from "react";
// import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Button from '@material-ui/core/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/userActions";


const Login = (props) => {
  const dispatch = useDispatch()
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
        // .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Weak Password"),
    }),
    onSubmit: (values) => {
      loginClickHandler(values)
    },
  });

  const loginClickHandler =  (data) => {
    //Make api calls
    axios.post('/auth/login',data).then(async response => {
      const jwtToken = response.headers.authorization.split(" ")[1];
      localStorage.setItem("access-token", jwtToken);
      axios.defaults.headers.authorization = `Bearer ${jwtToken}`
      const user = await axios.get('/user/'+response.data.id).then(response => response.data)
      dispatch(setUser(user))
      props.history.push("/")
    })
    .catch(error => {
      console.log(error)
    })
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
            <Input
              name="password"
              classes={{
                inputComponentClass: "login-input",
              }}
              value={formik.values.password}
              onChange={(event) => onChangeHandler(event.target.name,event.target.value) }
              type="password"
              placeholder="Enter password"
              onBlur={(event) => onBlur(event.target.name)}
              errors={formik.errors.password}
            />
            {/* <TextField type="password" placeholder="Enter password" onBlur={(event) => onBlur(event.target.name)} id="outlined-basic" name="password" value={formik.values.password} label="password" variant="outlined" onChange={(event) => onChangeHandler(event.target.name,event.target.value) } /> */}
          </div>
          {/* Custom Button 
            <Button type="submit" classname="login-button">
            Login
          </Button>
          */}
          <Button type="submit" variant="contained" color="primary">Sign In</Button>
          {/* <Button variant="outlined" color="secondary">Sign up</Button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
