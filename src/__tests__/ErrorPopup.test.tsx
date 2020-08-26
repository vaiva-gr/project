import * as React from "react";
import { shallow } from "enzyme";

import { ErrorPopup, Close } from "../components/ErrorPopup/ErrorPopup";

describe("components/ErrorPopup", () => {
  it("renders", () => {
    const wrapper = shallow(<ErrorPopup onClick={jest.fn()} />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("calls onClick when button is clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ErrorPopup onClick={onClick} />);
    wrapper.find(Close).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
