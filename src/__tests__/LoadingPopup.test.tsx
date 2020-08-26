import * as React from "react";
import { shallow } from "enzyme";

import { LoadingPopup } from "../components/LoadingPopup/LoadingPopup";

describe("components/LoadingPopup", () => {
  it("renders", () => {
    const wrapper = shallow(<LoadingPopup />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
