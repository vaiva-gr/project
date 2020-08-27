import * as React from "react";
import { shallow, mount } from "enzyme";

import { Table } from "../components/Table/Table";
import { Servers } from "../assets/_mocks_/servers";
import { Button } from "../components/Button/Button";

describe("components/Table", () => {
  const props = {
    logoutUser: jest.fn(),
    fetchServers: jest.fn(),
    deleteServers: jest.fn(),
    updateServers: jest.fn(),
  };

  it("renders", () => {
    const wrapper = shallow(<Table servers={Servers} {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders correct info", () => {
    const wrapper = mount(<Table servers={Servers} {...props} />);
    expect(wrapper.text()).toEqual(
      expect.stringContaining(Servers.servers[0].name)
    );
  });
});
