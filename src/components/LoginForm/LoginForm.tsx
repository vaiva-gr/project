import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { H1 } from "../Headers/Headers";
import { device } from "../../device";

interface LoginFormProps {
  loginUser?: (userData: { username: string; password: string }) => void;
}

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 60px 40px;
  border-radius: 5px;
  width: 500px;
  box-shadow: 0px 0px 76px 14px rgba(0, 0, 0, 0.4);

  @media ${device.mobile} {
    padding: 40px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: solid #a6a6a6 1px;
  border-radius: 4px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
  height: 30px;
  margin-top: 5px;
`;

export const LoginForm = ({ loginUser }: LoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      event.preventDefault();
      loginUser &&
        loginUser({ username: values.username, password: values.password });
    },
  });

  return (
    <LoginFormWrapper>
      <FormWrapper>
        <H1 mt={0} textAlign={"center"} fontSize={["24px", "36px"]}>
          Login
        </H1>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <Error>
            {formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null}
          </Error>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Error>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </Error>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    </LoginFormWrapper>
  );
};
