import * as React from "react";
import { shallow } from "enzyme";

import { Button, ButtonWrapper } from "../components/Button/Button";

describe("components/Button", () => {
  const onClick = jest.fn();
  it("renders", () => {
    const wrapper = shallow(<Button onClick={onClick}>A</Button>);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("calls onClick when button is clicked", () => {
    const wrapper = shallow(<Button onClick={onClick}>A</Button>);
    wrapper.find(ButtonWrapper).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
