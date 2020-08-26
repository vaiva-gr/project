import * as React from "react";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Layout } from "../../components/Layout/Layout";
import { UserType } from "../../types/User";

interface LoginPageProps {
  user: UserType;
  loginUser?: (userData: { username: string; password: string }) => void;
}

export const LoginPage = ({ loginUser, user }: LoginPageProps) => {
  return (
    <Layout>
      <LoginForm loginUser={loginUser} user={user} />
    </Layout>
  );
};
