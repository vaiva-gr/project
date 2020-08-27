import * as React from "react";
import { shallow } from "enzyme";

import { Dropdown, ArrowWrapper } from "../components/Dropdown/Dropdown";

describe("components/Dropdown", () => {
  const props = {
    onClickAsc: jest.fn(),
    onClickDesc: jest.fn(),
    ascTitle: "asc",
    descTitle: "desc",
  };
  it("renders", () => {
    const wrapper = shallow(<Dropdown {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
