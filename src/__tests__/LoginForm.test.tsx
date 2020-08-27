import * as React from "react";
import { shallow, mount } from "enzyme";

import { LoginForm, Form } from "../components/LoginForm/LoginForm";
import { User } from "../assets/_mocks_/user";

describe("components/LoginForm", () => {
  it("renders", () => {
    const wrapper = shallow(<LoginForm user={User} loginUser={jest.fn()} />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("renders form in login", () => {
    const wrapper = mount(<LoginForm user={User} loginUser={jest.fn()} />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
