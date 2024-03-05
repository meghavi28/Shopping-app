import React from "react";
import { Formik, Form, Field } from "formik";
import { Input, Button, DatePicker, message } from "antd";
import dayjs from "dayjs";
import * as Yup from "yup";
import "./signup.css";
import axios from "axios";

const SignupComponent: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    birthdate: dayjs(),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]+$/, "Mobile number must contain only digits"),
    birthdate: Yup.date().required("Birthdate is required"),
  });

  const onSubmit = async (values: any) => {
    const response = await axios.post("http://localhost:3300/signup", values);
    console.log(response.data);
  };
  return (
    <div className="mainDiv">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name">
                {({ field, meta }: any) => (
                  <div>
                    <Input
                      {...field}
                      placeholder="Enter your name"
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

            <div>
              <label htmlFor="mobile">Mobile</label>
              <Field name="mobile">
                {({ field, meta }: any) => (
                  <div>
                    <Input
                      {...field}
                      placeholder="Enter your mobile number"
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
              <label htmlFor="birthdate">Birthdate</label>
              <Field name="birthdate">
                {({ field, form, meta }: any) => (
                  <div>
                    <DatePicker
                      {...field}
                      onChange={(value) =>
                        form.setFieldValue("birthdate", value)
                      }
                      placeholder="Select your birthdate"
                      format="DD-MM-YYYY"
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

export default SignupComponent;
