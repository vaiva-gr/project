import * as React from "react";
import { shallow } from "enzyme";

import { LoginForm } from "../components/LoginForm/LoginForm";
import { User } from "../assets/_mocks_/user";

describe("components/LoginForm", () => {
  it("renders", () => {
    const wrapper = shallow(<LoginForm user={User} loginUser={jest.fn()} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(User.token).toHaveLength(32);
  });
});
