import * as React from "react";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Layout } from "../../components/Layout/Layout";

interface LoginPageProps {
  loginUser?: (userData: { username: string; password: string }) => void;
}

export const LoginPage = ({ loginUser }: LoginPageProps) => {
  return (
    <Layout>
      <LoginForm loginUser={loginUser} />
    </Layout>
  );
};
