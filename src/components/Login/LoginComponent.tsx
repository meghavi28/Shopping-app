import React from "react";
import { Formik, Form, Field } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import "./login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const onSubmit = async (values: any) => {
    const response = await axios.post("http://localhost:3300/login", values);
    console.log(response.data);
    if (response.data)
      dispatch({
        type: "LOGIN",
        payload: response.data.token,
      });
      navigate("/")
  };
  return (
    <div className="mainDiv">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email">
                {({ field, meta }: any) => (
                  <div>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="input"
                    />
                    {meta.touched && meta.error && (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field name="password">
                {({ field, meta }: any) => (
                  <div>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="input"
                    />
                    {meta.touched && meta.error && (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
