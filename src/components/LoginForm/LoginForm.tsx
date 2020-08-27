import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { H1 } from "../Text/Text";
import { Box } from "../Box/Box";
import { ErrorPopup } from "../ErrorPopup/ErrorPopup";
import { LoadingPopup } from "../LoadingPopup/LoadingPopup";
import { UserType } from "../../types/User";

interface LoginFormProps {
  user: UserType;
  loginUser: (userData: { username: string; password: string }) => void;
}

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  border: solid #a6a6a6 1px;
  border-radius: 4px;
  padding-left: 10px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
  height: 30px;
  margin-top: 5px;
`;

export const LoginForm = ({ user, loginUser }: LoginFormProps) => {
  const [showError, setShowError] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);

  const handleErrorPopup = () => setShowError(!showError);

  React.useEffect(() => {
    setShowLoading(user.loading);
  });
  React.useEffect(() => {
    user.error && setShowError(true);
  }, [user.error]);

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
      loginUser &&
        loginUser({ username: values.username, password: values.password });
    },
  });

  return (
    <LoginFormWrapper>
      {showLoading && <LoadingPopup />}
      {showError && <ErrorPopup onClick={handleErrorPopup} />}
      <Box width={"500px"}>
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
      </Box>
    </LoginFormWrapper>
  );
};
